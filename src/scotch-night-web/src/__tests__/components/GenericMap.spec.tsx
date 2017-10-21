import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import React from "react";
import ReactDOM from "react-dom";

import { locations } from "../../../public/locations";
import GenericMap from "../../app/components/GenericMap";

configure({ adapter: new Adapter() });

describe("Component: GenericMap", () => {
    it("should render without throwing an error", () => {
        const location = locations[0];
        const markers = locations.map((l) => {
            const position = { ...l.position };

            return {
                position,
                key: location.name,
                animation: 2
            };
        });

        const wrapper = shallow(
            <GenericMap
                containerElement={
                    <div style={{ height: `100%` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
                ref={() => null}
                defaultZoom={13}
                defaultCenter={location.position}
                onClick={() => null}
                markers={markers}
            />
        ).toJson;

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
