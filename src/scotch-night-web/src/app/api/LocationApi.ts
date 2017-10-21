import { ILocation } from "../stores/LocationStore";

export default class LocationApi {
    public getAll() {
        return fetch("https://scotchnightapi.azurewebsites.net/api/locations")
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
        return fetch("https://scotchnightapi.azurewebsites.net/api/locations", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
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