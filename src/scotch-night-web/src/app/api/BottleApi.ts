import { IBottle } from "../stores/BottleStore";

export default class BottleApi {
    public getAllBottles() {
        return fetch("https://scotchnightapi.azurewebsites.net/api/bottles")
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
        return fetch("https://scotchnightapi.azurewebsites.net/api/bottles", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
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
}