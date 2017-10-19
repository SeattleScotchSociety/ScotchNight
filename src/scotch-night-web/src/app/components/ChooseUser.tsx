import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

import { IRootStore } from "../stores/RootStore";

interface IChooseUserProps { store: IRootStore; }

@inject("store")
@observer
export class ChooseUser extends React.Component<IChooseUserProps> {
    constructor(props: IChooseUserProps) {
        super(props);
    }

    public render() {
        const { members } = this.props.store.memberStore;
        const memberElements = members.map((member) => {
            return (<Button key={member.id}>{member.firstName}</Button>);
        });

        return (
            <div>
                <img src="/src/app/images/whiskey-image.jpg" />
                {memberElements}
            </div>
        );
    }
}

export default ChooseUser;