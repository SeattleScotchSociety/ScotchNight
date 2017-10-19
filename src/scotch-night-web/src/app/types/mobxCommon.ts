import { types } from "mobx-state-tree";

export const Location = types.model("Location", {
    lat: types.number,
    lng: types.number,
});