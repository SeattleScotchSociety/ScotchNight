import { IBottle } from "../stores/BottleStore";

export default class NoteApi {
    private auth;

    public constructor(auth) {
        this.auth = auth;
    }

    public getSummaryNotes = (bottleId: any) => {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch(`http://localhost:5000/api/notes/summary/${bottleId}`, {
            method: "get",
            headers
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((summary) => {
                if (!summary) {
                    return;
                }

                return summary;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public getMemberNotes = (memberId: any, bottleId: any) => {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch(`https://scotchnightapi.azurewebsites.net/api/notes/member/${memberId}/bottle/${bottleId}`, {
            method: "get",
            headers
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((note) => {
                if (!note) {
                    return;
                }

                return note;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public addReview = (note) => {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch("https://scotchnightapi.azurewebsites.net/api/notes", {
            method: "post",
            headers,
            body: JSON.stringify(note)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((newNote) => {
                if (!newNote) {
                    return;
                }

                return newNote.id;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
