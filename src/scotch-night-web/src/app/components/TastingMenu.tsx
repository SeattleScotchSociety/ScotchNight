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

        this._handleOnClick = this._handleOnClick.bind(this);
    }

    private _handleOnClick(bottle) {
        const { navigation, scotchNightStore } = this.props.store;

        scotchNightStore.setCurrentBottle(bottle);

        navigation.push(`/bottles/${bottle.id}`);
    }

    public render() {
        const { scotchNightStore } = this.props.store;
        const { bottles } = scotchNightStore.currentEvent;

        const menuList = bottles.map((item, index) => {
            return (
                <div className="bottle" key={index} onClick={() => this._handleOnClick(item)}>
                    <p className="bottle__distillery">{item.distillery}</p>
                    <p className="bottle__name">{item.name}</p>
                </div>
            );
        });

        return (
            <div className="menu">
                <h2>Tasting Menu</h2>
                {
                    !bottles || bottles.length === 0 ? <div className="noBottles">No Bottles</div> : null
                }
                {menuList}
            </div>
        );
    }
}

export default TastingMenu;
