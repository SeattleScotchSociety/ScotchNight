import * as _ from "lodash";
import { when } from "mobx";

import { bottles } from "../../../public/bottles";
import { BottleStore, IBottle } from "../../app/stores/BottleStore";
import { bottleApi } from "../mocks";

describe("BottleStore", () => {
    describe("loadBottles", () => {
        it("fetches data", (done: () => void) => {
            const store = BottleStore.create({ bottles: [] }, { bottleApi });
            const expectedBottle = bottles[0];

            store.loadBottles();

            when(
                () => store.isLoading === false,
                () => {
                    expect(store.bottles.length).toBe(bottles.length);
                    expect(_.find(store.bottles, ["id", expectedBottle.id]).name).toBe(expectedBottle.name);
                    done();
                },
            );
        });
    });
});
