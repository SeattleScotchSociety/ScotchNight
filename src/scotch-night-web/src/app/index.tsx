import createBrowserHistory from "history/createBrowserHistory";
import { observable } from "mobx";
import { Provider } from "mobx-react";
import { applySnapshot, getSnapshot, onPatch, types } from "mobx-state-tree";
import { asReduxStore, connectReduxDevtools } from "mobx-state-tree/middleware/redux";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Router } from "react-router-dom";

import "./styles/app.scss";

import App from "./App";
import Auth from "./services/Auth";
import { createStore } from "./store";
import { IRootStore, RootStore } from "./stores/RootStore";
import { RouterStore, syncHistoryWithStore } from "./stores/RouterStore";

const browserHistory = createBrowserHistory();
const patches = observable.shallowArray();
const rootStore = createStore(browserHistory);
const auth = new Auth(rootStore.scotchNightStore, rootStore.eventStore);
const reduxStore = asReduxStore(rootStore);
connectReduxDevtools(require("remotedev"), rootStore);

function renderApp(root: JSX.Element, store: IRootStore) {
    ReactDOM.render(
        <Provider store={rootStore}>
            <Router history={browserHistory} >
                {root}
            </Router>
        </Provider>,
        document.getElementById("app")
    );
}

const initializeUserCallback = async (err, profile) => {
    const { eventStore, scotchNightStore } = rootStore;

    if (err) {
        console.log(err);
        return;
    }

    const member = await scotchNightStore.setCurrentUserByEmail(profile.email);
    eventStore.loadEventsForMember(member);
};

auth.getProfile(initializeUserCallback);

renderApp(<App auth={auth} />, reduxStore);

rootStore.bottleStore.loadBottles();
rootStore.memberStore.loadMembers();
syncHistoryWithStore(browserHistory, rootStore.navigation).subscribe();