import { History, Location, LocationListener, Path } from "history";
import { IValueDidChange, observe } from "mobx";
import { types } from "mobx-state-tree";
import { getDependencyViews } from "./dependencyViews";

export const RouterStore = types.model("RouterStore",
    {
        location: types.optional(types.string, ""),
    })
    .views((self) => getDependencyViews(self))
    .actions((self) => ({
        updateLocation(location: Location) {
            self.location = location.pathname;
        },
        push(path: Path) {
            self.history.push(path);
        },
        replace(path: Path) {
            self.history.replace(path);
        },
        go(n: number) {
            self.history.go(n);
        },
        goBack() {
            self.history.goBack();
        },
        goForward() {
            self.history.goForward();
        },
    }));

export type IRouterStore = typeof RouterStore.Type;

export type SimpleLocationListener = (location: string, action: string) => void;

export interface IHistorySubscriber extends History {
    subscribe(listener?: SimpleLocationListener): () => void;
    unsubscribe(): void;
}

export const syncHistoryWithStore = (history: History, store: IRouterStore): IHistorySubscriber => {
    // Handle update from history object
    const handleLocationChange = (location: Location) => {
        store.updateLocation(location);
    };

    const unsubscribeFromHistory = history.listen(handleLocationChange);
    handleLocationChange(history.location);

    const subscribe = (listener?: SimpleLocationListener) => {
        const onStoreChange = (change: IValueDidChange<{}>) => {
            if (listener) {
                listener(store.location, history.action);
            }

            if (window.location.pathname !== store.location) {
                store.replace(store.location);
            }
        };

        // Listen for changes to location state in store
        const unsubscribeFromStore = observe(store, "location", onStoreChange);

        if (listener) {
            listener(store.location, history.action);
        }

        return () => {
            unsubscribeFromStore();
        };
    };
    const unsubscribe = () => unsubscribeFromHistory();

    const newHistory = history as IHistorySubscriber;
    newHistory.subscribe = subscribe;
    newHistory.unsubscribe = unsubscribe;
    return newHistory;
};
