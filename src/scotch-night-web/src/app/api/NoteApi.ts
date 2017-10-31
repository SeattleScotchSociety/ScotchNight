import { IBottle } from "../stores/BottleStore";

export default class NoteApi {
    public getSummaryNotes = (bottleId: string) => {
        return fetch(`https://scotchnightapi.azurewebsites.net/api/notes/summary/${bottleId}`, {
            method: "get",
            headers: {
                Accept: "application/json"
            }
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

    public getMemberNotes = (memberId: string, bottleId: string) => {
        return fetch(`https://scotchnightapi.azurewebsites.net/api/notes/member/${memberId}/bottle/${bottleId}`, {
            method: "get",
            headers: {
                Accept: "application/json"
            }
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
        return fetch("https://scotchnightapi.azurewebsites.net/api/notes", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
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