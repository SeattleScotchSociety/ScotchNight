import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import React from "react";
import ReactDOM from "react-dom";

import { locations } from "../../../public/locations";
import ChooseUser from "../../app/components/ChooseUser";

import { rootStore } from "../mocks";

configure({ adapter: new Adapter() });

describe("Component: ChooseUser", () => {
    it("should render without throwing an error", () => {
        const wrapper = shallow(
            <ChooseUser
                store={rootStore}
            />
        ).toJson;

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});