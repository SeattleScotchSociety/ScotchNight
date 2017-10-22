import { WebAuth } from "auth0-js";
import createBrowserHistory from "history/createBrowserHistory";

export default class Auth {
    private history = createBrowserHistory();

    private auth0 = new WebAuth({
        domain: "seattle-scotch-society.auth0.com",
        clientID: "ZjCMnx9zuX7umATd69Oyv5jpyk9d80zU",
        redirectUri: "http://localhost:8080/callback",
        audience: "https://seattle-scotch-society.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"
    });

    public constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    public login() {
        this.auth0.authorize();
    }

    public handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.history.replace("/home");
            } else if (err) {
                this.history.replace("/home");
                console.log(err);
            }
        });
    }

    public setSession(authResult) {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
        // navigate to the home route
        this.history.replace("/home");
    }

    public logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        // navigate to the home route
        this.history.replace("/home");
    }

    public isAuthenticated() {
        // Check whether the current time is past the
        // access token"s expiry time
        const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }
}