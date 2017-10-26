import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

import { IRootStore } from "../stores/RootStore";

interface IBottleListProps { store: IRootStore; }

@inject("store")
@observer
export class BottleList extends React.Component<IBottleListProps> {
    constructor(props: IBottleListProps) {
        super(props);
    }

    public render() {
        const { bottles } = this.props.store.bottleStore;
        const bottleElements = bottles.map((bottle) => {
            return (<Button key={bottle.id}>{bottle.name}</Button>);
        });

        return (
            <div>
                {bottleElements}
            </div>
        );
    }
}

export default BottleList;