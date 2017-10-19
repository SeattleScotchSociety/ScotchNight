import * as _ from "lodash";
import { when } from "mobx";

import { members } from "../../../public/members";
import { IMember, MemberStore } from "../../app/stores/MemberStore";
import { memberApi } from "../mocks";

describe("MemberStore", () => {
    describe("loadMembers", () => {
        it("fetches data", (done: () => void) => {
            const store = MemberStore.create({ members: [] }, { memberApi });
            const expected = members[0];

            store.loadMembers();

            when(
                () => store.isLoading === false,
                () => {
                    expect(store.members.length).toBe(members.length);
                    expect(_.find(store.members, ["id", expected.id]).email).toBe(expected.email);
                    done();
                },
            );
        });
    });
});
