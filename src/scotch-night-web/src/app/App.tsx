import { inject, observer } from "mobx-react";
import * as React from "react";
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";

import { AddBottle } from "./components/AddBottle";
import { BottleDetail } from "./components/BottleDetail";
import { BottleList } from "./components/BottleList";
import { EventDetail } from "./components/EventDetail";
import { EventList } from "./components/EventList";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { NavigationBar } from "./components/NavigationBar";
import { Auth } from "./services/Auth";
import { IRootStore } from "./stores/RootStore";

export interface IAppProps { store?: IRootStore; auth: Auth; }

interface IRouteProps extends RouteComponentProps<any>, React.Props<any>, IAppProps {
}

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={(props) => (
            auth.isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
        )}
    />
);

@inject("store")
@observer
export class App extends React.Component<IRouteProps> {
    constructor(props: IRouteProps) {
        super(props);

        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.initializeUserCallback = this.initializeUserCallback.bind(this);
    }

    public render() {
        const { auth, store } = this.props;
        const { scotchNightStore } = store;

        return (<div>
            <Header scotchNightStore={scotchNightStore} auth={auth} />
            <main>
                <Switch>
                    <Route
                        path="/login"
                        render={(p) => {
                            return <Login auth={auth} />;
                        }}
                    />
                    <PrivateRoute exact path="/bottles/:id" component={BottleDetail} auth={auth} />
                    <PrivateRoute exact path="/bottles" component={BottleList} auth={auth} />
                    <PrivateRoute path="/events/:id/add-bottle" component={AddBottle} auth={auth} />
                    <PrivateRoute path="/events/:id" component={EventDetail} auth={auth} />
                    <PrivateRoute exact path="/events" component={EventList} auth={auth} />
                    <Route
                        path="/callback"
                        render={(p) => {
                            this.handleAuthentication(p, auth);
                            return <EventList store={store} />;
                        }}
                    />
                    <PrivateRoute path="/" component={EventList} auth={auth} />
                </Switch>
            </main>
        </div>);
    }

    private async initializeUserCallback(err, profile) {
        const { store } = this.props;
        const { bottleStore, eventStore, locationStore, scotchNightStore } = store;

        if (err) {
            console.log(err);
            return;
        }

        await bottleStore.loadBottles();
        await locationStore.loadLocations();
        const member = await scotchNightStore.setCurrentUserByEmail(profile.email);
        eventStore.loadEventsForMember(member);
    }

    private handleAuthentication(nextState, auth) {
        if (/access_token|id_token|error/.test(nextState.location.hash)) {
            auth.handleAuthentication(this.initializeUserCallback);
        }
    }
}

export default withRouter(App) as React.ComponentClass<IAppProps>;
