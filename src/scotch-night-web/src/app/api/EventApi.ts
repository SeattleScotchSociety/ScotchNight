import { IEvent } from "../stores/EventStore";

export default class EventApi {
    public getAllEvents() {
        return fetch("https://scotchnightapi.azurewebsites.net/api/events")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                return null;
            })
            .then((events: IEvent[]) => {
                if (!events) {
                    return;
                }

                return events;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public addEvent(event) {
        return fetch("https://scotchnightapi.azurewebsites.net/api/events", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((newEvent: IEvent) => {
                if (!newEvent) {
                    return;
                }

                return newEvent.id;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}