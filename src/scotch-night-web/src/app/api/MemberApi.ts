import { IMember } from "../stores/MemberStore";

export default class MemberApi {
    private auth;

    public constructor(auth) {
        this.auth = auth;
    }

    public getAll(): Promise<IMember[]> {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch("https://scotchnightapi.azurewebsites.net/api/members", {
            headers
        })
            .then((response) => response.json())
            .then((members: IMember[]) => {
                if (!members) {
                    return;
                }

                return members;
            })
            .catch((error) => {
                console.log(error);
                return null;
            });
    }

    public getByEmail(email: string): Promise<IMember> {
        const { getAccessToken } = this.auth;
        const headers = {
            "Authorization": `Bearer ${getAccessToken()}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        return fetch(`https://scotchnightapi.azurewebsites.net/api/members/${email}`, {
            headers
        })
            .then((response) => response.json())
            .then((member: IMember) => {
                if (!member) {
                    return;
                }

                return member;
            })
            .catch((error) => {
                console.log(error);
                return null;
            });
    }
}