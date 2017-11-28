import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import React from "react";
import ReactDOM from "react-dom";

import { locations } from "../../../public/locations";
import { Header } from "../../app/components/Header";

import { rootStore } from "../mocks";

configure({ adapter: new Adapter() });

describe("Component: Header", () => {
    it("should render without throwing an error", () => {
        const wrapper = shallow(
            <Header
                scotchNightStore={rootStore.scotchNightStore}
                location={{ pathname: "/" }}
                auth={{ isAuthenticated: () => false }}
            />
        ).toJson;

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});