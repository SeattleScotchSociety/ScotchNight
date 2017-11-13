import { IBottle } from "../stores/BottleStore";

export default class BottleApi {
    private auth;

    public constructor(auth) {
        this.auth = auth;
    }

    public getAll() {
        const { getAccessToken } = this.auth;
        const headers = { Authorization: `Bearer ${getAccessToken()}` };

        return fetch("https://scotchnightapi.azurewebsites.net/api/bottles", {
            headers
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                return null;
            })
            .then((bottles: IBottle[]) => {
                if (!bottles) {
                    return;
                }

                return bottles;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public addBottle(bottle) {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch("https://scotchnightapi.azurewebsites.net/api/bottles", {
            method: "post",
            headers,
            body: JSON.stringify(bottle)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((newBottle: IBottle) => {
                if (!newBottle) {
                    return;
                }

                return newBottle.id;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public updateBottle(bottle) {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch("https://scotchnightapi.azurewebsites.net/api/bottles", {
            method: "put",
            headers,
            body: JSON.stringify(bottle)
        })
            .then((response) => {
                if (response.ok) {
                    return true;
                }

                return false;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}