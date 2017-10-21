import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import React from "react";
import ReactDOM from "react-dom";

import { locations } from "../../../public/locations";
import { NavigationBar } from "../../app/components/NavigationBar";

import { rootStore } from "../mocks";

configure({ adapter: new Adapter() });

describe("Component: NavigationBar", () => {
    it("should render without throwing an error", () => {
        const wrapper = shallow(
            <NavigationBar
                scotchNightStore={rootStore.scotchNightStore}
            />
        ).toJson;

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});