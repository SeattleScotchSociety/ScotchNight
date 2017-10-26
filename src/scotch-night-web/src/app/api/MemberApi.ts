import { IMember } from "../stores/MemberStore";

export default class MemberApi {
    public getAll(): Promise<IMember[]> {
        return fetch("https://scotchnightapi.azurewebsites.net/api/members")
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
        return fetch(`https://scotchnightapi.azurewebsites.net/api/members/${email}`)
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