import { inject, observer } from "mobx-react";
import * as React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";

import { ChooseUser } from "./components/ChooseUser";
import { EventList } from "./components/EventList";
import { Header } from "./components/Header";
import { NavigationBar } from "./components/NavigationBar";
import { IRootStore } from "./stores/RootStore";

export interface IAppProps { store?: IRootStore; }

interface IRouteProps extends RouteComponentProps<any>, React.Props<any>, IAppProps {
}

const App = inject("store")(observer((props: IRouteProps) => {
    return (<div>
        <div id="site-head">
            <Header scotchNightStore={props.store.scotchNightStore} />
            <NavigationBar scotchNightStore={props.store.scotchNightStore} />
        </div>
        <main>
            <Switch>
                <Route exact path="/events" component={EventList} />
                <Route exact path="/" component={ChooseUser} />
            </Switch>
        </main>
    </div>);
}));

export default withRouter(App) as React.ComponentClass<IAppProps>;
