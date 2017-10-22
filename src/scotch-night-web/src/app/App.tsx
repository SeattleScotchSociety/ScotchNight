import { inject, observer } from "mobx-react";
import * as React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";

import { BottleList } from "./components/BottleList";
import Callback from "./components/Callback";
import { ChooseUser } from "./components/ChooseUser";
import { EventList } from "./components/EventList";
import { Header } from "./components/Header";
import { NavigationBar } from "./components/NavigationBar";
import Auth from "./services/Auth";
import { IRootStore } from "./stores/RootStore";

export interface IAppProps { store?: IRootStore; }

interface IRouteProps extends RouteComponentProps<any>, React.Props<any>, IAppProps {
}

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
};

const App = inject("store")(observer((props: IRouteProps) => {
    return (<div>
        <div id="site-head">
            <Header scotchNightStore={props.store.scotchNightStore} auth={auth} />
            <NavigationBar scotchNightStore={props.store.scotchNightStore} />
        </div>
        <main>
            <Switch>
                <Route exact path="/bottles" component={BottleList} />
                <Route exact path="/events" component={EventList} />
                <Route
                    path="/callback"
                    render={(p) => {
                        handleAuthentication(p, null);
                        return <Callback {...p} />;
                    }}
                />
                <Route exact path="/" component={ChooseUser} />
            </Switch>
        </main>
    </div>);
}));

export default withRouter(App) as React.ComponentClass<IAppProps>;
