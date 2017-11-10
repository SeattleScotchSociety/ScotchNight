import { getEnv, types } from "mobx-state-tree";

export function getDependencyViews(self: any) {
    return {
        get auth() {
            return getEnv(self).auth;
        },
        get history() {
            return getEnv(self).history;
        },
        get locale() {
            return getEnv(self).locale;
        },
        get fetch() {
            return getEnv(this).fetch;
        },
    };
}
