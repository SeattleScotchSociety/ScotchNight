import { ILocation } from "../stores/LocationStore";

export default class LocationApi {
    private auth;

    public constructor(auth) {
        this.auth = auth;
    }

    public getAll() {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch("https://scotchnightapi.azurewebsites.net/api/locations", {
            headers
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                return null;
            })
            .then((locations: ILocation[]) => {
                if (!locations) {
                    return;
                }

                return locations;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public addLocation(location) {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch("https://scotchnightapi.azurewebsites.net/api/locations", {
            method: "post",
            headers,
            body: JSON.stringify(location)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((newLocation: ILocation) => {
                if (!newLocation) {
                    return;
                }

                return newLocation.id;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}