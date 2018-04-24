import { applySnapshot, onSnapshot } from 'mobx-state-tree';

export const persist = (name, store, options, schema = {}) => {
    let hydrated = false;

    let storage = options.storage;

    if (typeof localStorage !== 'undefined' && localStorage === storage) {
        storage = Storage;
    }

    onSnapshot(store, snapshot => {
        if (!hydrated) {
            return;
        }
        const snapshotLocal = {
            bottleStore: snapshot.bottleStore,
            eventStore: snapshot.eventStore,
            locationStore: snapshot.locationStore,
            memberStore: snapshot.memberStore,
            hydrated: snapshot.hydrated,
            scotchNightStore: snapshot.scotchNightStore
        };

        const data = !options.jsonify ? snapshotLocal : JSON.stringify(snapshotLocal);
        storage.setItem(name, data);
    });

    const onHydrate = (data: string) => {
        if (data) {
            let snapshot = !options.jsonify ? data : JSON.parse(data);
            try {
                snapshot = { ...snapshot, navigation: store.navigation };

                applySnapshot(store, snapshot);
            } catch (exception) {
                console.log(exception);
            }
        }

        if (store.afterHydration && typeof store.afterHydration === 'function') {
            store.afterHydration();
        }

        hydrated = true;
    };

    storage.getItem(name).then((data: string) => {
        onHydrate(data);
    });
};
