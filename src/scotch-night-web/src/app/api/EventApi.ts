import { IEvent } from "../stores/EventStore";
import { IMember } from "../stores/MemberStore";

export default class EventApi {
    private auth;

    public constructor(auth) {
        this.auth = auth;
    }

    public getAll(): Promise<IEvent[]> {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch("https://scotchnightapi.azurewebsites.net/api/events", {
            headers
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                return null;
            })
            .then((events: IEvent[]) => {
                if (!events) {
                    return null;
                }

                return events;
            })
            .catch((error) => {
                console.log(error);
                return null;
            });
    }

    public getAllForMember(member: IMember): Promise<IEvent[]> {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch(`https://scotchnightapi.azurewebsites.net/api/members/${member.id}/events`, {
            headers
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                return null;
            })
            .then((events: IEvent[]) => {
                if (!events) {
                    return null;
                }

                return events;
            })
            .catch((error) => {
                console.log(error);
                return null;
            });
    }

    public addEvent(event) {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch("https://scotchnightapi.azurewebsites.net/api/events", {
            method: "post",
            headers,
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

    public updateEvent(event) {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch("https://scotchnightapi.azurewebsites.net/api/events", {
            method: "put",
            headers,
            body: JSON.stringify(event)
        })
            .then((response) => {
                if (response.ok) {
                    return response;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}