import { IEvent } from "../src/app/stores/EventStore";

export const events: IEvent[] = [
    {
        id: "8ff33e2f-642c-4196-8c8e-c2e2b60a1205",
        date: "5/30/2017",
        title: "The First",
        location: "a15a7cb9-6cf7-4e97-900c-32b3f0427263",
        public: false,
        description: "The very first Seattle Scotch Society night. Join us for scotch and pizza!"
    },
    {
        id: "93aec433-52f1-4cbf-824e-c19397359109",
        title: "The Second",
        date: "8/5/2017",
        location: "5b14026b-0da2-492c-88ee-68df1aebcdb1",
        public: false,
        description: `The first was a success, now let's keep them coming... onto our second scotch night!`,
        menu: [
            "bbf70a5b-4257-498f-9afe-7dac23d40496",
            "dd979a80-293a-40a2-a936-3f5adfd0e92b"
        ]
    }
];
export default events;
