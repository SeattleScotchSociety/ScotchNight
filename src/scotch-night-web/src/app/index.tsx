performance.mark('start-initial-imports');
import createBrowserHistory from 'history/createBrowserHistory';
import * as storage from 'localforage';
import { observable } from 'mobx';
import { Provider } from 'mobx-react';
import { applySnapshot, getSnapshot, onPatch, types } from 'mobx-state-tree';
import { asReduxStore, connectReduxDevtools } from 'mst-middlewares';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router-dom';
performance.mark('end-initial-imports');
performance.measure('Initial Imports', 'start-initial-imports', 'end-initial-imports');

import './styles/app.scss';

performance.mark('start-my-imports');

import App from './App';
import { persist } from './persist';
import Auth from './services/Auth';
import { createStore } from './store';
import { IRootStore, RootStore } from './stores/RootStore';
import { RouterStore, syncHistoryWithStore } from './stores/RouterStore';
performance.mark('end-my-imports');
performance.measure('My Imports', 'start-my-imports', 'end-my-imports');

const browserHistory = createBrowserHistory();
const patches = observable.shallowArray();
const auth = new Auth();

performance.mark('start-create-store');
const rootStore = createStore(browserHistory, auth);
performance.mark('end-create-store');
performance.measure('Create Store', 'start-create-store', 'end-create-store');
const reduxStore = asReduxStore(rootStore);
connectReduxDevtools(require('remotedev'), rootStore);

function renderApp(root: JSX.Element) {
    ReactDOM.render(
        <Provider store={rootStore}>
            <Router history={browserHistory}>{root}</Router>
        </Provider>,
        document.getElementById('app')
    );
}

performance.mark('start-persist-setup');
persist('scotchnight-state', rootStore, {
    storage,
    jsonify: true
});
performance.mark('end-persist-setup');
performance.measure('Setup Persistance', 'start-persist-setup', 'end-persist-setup');

renderApp(<App auth={auth} />);

syncHistoryWithStore(browserHistory, rootStore.navigation).subscribe();
