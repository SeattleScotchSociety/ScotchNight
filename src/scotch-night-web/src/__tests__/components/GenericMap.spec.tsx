import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import React from "react";
import ReactDOM from "react-dom";

import GenericMap from "../../app/components/GenericMap";
import { IAdventureChoice } from "../../app/stores/EventStore";
import { experiences, rootStore } from "../mocks";

configure({ adapter: new Adapter() });

describe("Component: ExperienceMap", () => {
    it("should render without throwing an error", () => {
        const userLocation = rootStore.userStore.location;
        const markers = experiences.map((experience) => {
            const position = {
                lat: experience.location.lat,
                lng: experience.location.lng
            };

            return {
                position,
                key: experience.name,
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
                defaultCenter={userLocation}
                onClick={() => null}
                markers={markers}
            />
        ).toJson;

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
