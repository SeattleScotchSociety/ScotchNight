import { WebAuth } from "auth0-js";
import createBrowserHistory from "history/createBrowserHistory";
import { IEventStore } from "../stores/EventStore";
import { IScotchNightStore } from "../stores/ScotchNightStore";

export class Auth {
    private history = createBrowserHistory();
    private eventStore;
    private scotchNightStore;

    private auth0 = new WebAuth({
        domain: "seattle-scotch-society.auth0.com",
        clientID: "ZjCMnx9zuX7umATd69Oyv5jpyk9d80zU",
        redirectUri: "http://localhost:8080/callback",
        audience: "https://seattle-scotch-society.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid email"
    });

    public constructor(scotchNightStore: IScotchNightStore, eventStore: IEventStore) {
        this.scotchNightStore = scotchNightStore;
        this.eventStore = eventStore;
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.initializeUserCallback = this.initializeUserCallback.bind(this);
    }

    public login() {
        this.auth0.authorize();
    }

    public handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.history.replace("/");
            } else if (err) {
                this.history.replace("/");
                console.log(err);
            }
        });
    }

    public getAccessToken() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
            return "";
        }
        return accessToken;
    }

    public getProfile(cb) {
        const accessToken = this.getAccessToken();
        if (!accessToken) {
            cb(null, {});
            return;
        }

        this.auth0.client.userInfo(accessToken, (err, profile) => {
            cb(err, profile);
        });
    }

    public setSession(authResult) {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
        this.getProfile(this.initializeUserCallback);
        // navigate to the home route
        this.history.replace("/");
    }

    public logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        this.scotchNightStore.setCurrentUser(null);
        // navigate to the home route
        this.history.push("/bottles");
    }

    public isAuthenticated() {
        // Check whether the current time is past the
        // access token"s expiry time
        const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        const isLoggedIn = new Date().getTime() < expiresAt;

        return isLoggedIn;
    }

    private async initializeUserCallback(err, profile) {
        if (err) {
            console.log(err);
            return;
        }

        const member = await this.scotchNightStore.setCurrentUserByEmail(profile.email);
        this.eventStore.loadEventsForMember(member);
    }
}

export default Auth;