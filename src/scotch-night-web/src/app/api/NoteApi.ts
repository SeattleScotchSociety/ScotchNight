import { IBottle } from "../stores/BottleStore";

export default class NoteApi {
    private auth;

    public constructor(auth) {
        this.auth = auth;
    }

    public getSummaryNotes = (bottleId: any) => {
        const { getAccessToken } = this.auth;
        const token = getAccessToken();

        if (!token) {
            return;
        }

        const headers = {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch(`https://scotchnightapi.azurewebsites.net/api/notes/summary/${bottleId}`, {
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
        const token = getAccessToken();

        if (!token) {
            return;
        }

        const headers = {
            "Authorization": `Bearer ${token}`,
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

    public saveNote = (note) => {
        const { getAccessToken } = this.auth;
        const token = getAccessToken();

        if (!token) {
            return;
        }

        const headers = {
            "Authorization": `Bearer ${token}`,
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
                    return;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
