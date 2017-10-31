import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

import { IRootStore } from "../stores/RootStore";

import * as format from "date-fns/format";

interface ITastingMenuProps { store: IRootStore; }

@inject("store")
@observer
export class TastingMenu extends React.Component<ITastingMenuProps> {
    constructor(props: ITastingMenuProps) {
        super(props);

        this.handleOnPress = this.handleOnPress.bind(this);
    }

    public render() {
        const { scotchNightStore } = this.props.store;
        const { bottles } = scotchNightStore.currentEvent;

        if (!bottles || bottles.length === 0) {
            return (<div className="noBottles">No Bottles</div>);
        }

        const menuList = bottles.map((item, index) => {
            return (
                <li key={index} onClick={() => this.handleOnPress(item)}>{item.distillery} {item.name}</li>
            );
        });

        return (
            <ul>{menuList}</ul>
        );
    }

    private handleOnPress(bottle) {
        const { navigation, scotchNightStore } = this.props.store;

        scotchNightStore.setCurrentBottle(bottle);

        navigation.push(`/bottles/${bottle.id}`);
    }
}

export default TastingMenu;