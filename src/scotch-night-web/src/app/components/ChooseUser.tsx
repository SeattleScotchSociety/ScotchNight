import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

import { IMember } from "../stores/MemberStore";
import { IRootStore } from "../stores/RootStore";

interface IChooseUserProps { store: IRootStore; }

@inject("store")
@observer
export class ChooseUser extends React.Component<IChooseUserProps> {
    constructor(props: IChooseUserProps) {
        super(props);

        this.chooseUser = this.chooseUser.bind(this);
    }

    public render() {
        const { members } = this.props.store.memberStore;

        const memberElements = members.map((member) => {
            return (<Button key={member.id} onClick={() => this.chooseUser(member)}>{member.firstName}</Button>);
        });

        return (
            <div>
                <img src="/src/app/images/whiskey-image.jpg" />
                {memberElements}
            </div>
        );
    }

    private chooseUser(member: IMember) {
        const { scotchNightStore } = this.props.store;
        const { push } = this.props.store.navigation;

        scotchNightStore.setCurrentUser(member);

        push("/events");
    }
}

export default ChooseUser;