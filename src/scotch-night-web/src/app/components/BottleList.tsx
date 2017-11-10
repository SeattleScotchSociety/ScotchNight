import { inject, observer } from "mobx-react";
import * as React from "react";
import * as _ from 'lodash';

import { IRootStore } from "../stores/RootStore";

interface IBottleListProps { store: IRootStore; }

@inject("store")
@observer
export class BottleList extends React.Component<IBottleListProps> {
    constructor(props: IBottleListProps) {
        super(props);

        this._handleOnClick = this._handleOnClick.bind(this);
    }

    private _handleOnClick(bottle) {
        const { navigation, scotchNightStore } = this.props.store;

        scotchNightStore.setCurrentBottle(bottle);
        navigation.push(`/bottles/${bottle.id}`);
    }

    public render() {
        const { bottles } = this.props.store.bottleStore;
        const bottleElements = _.sortBy(bottles, ['distillery', 'name']).map((bottle) => {
            const { name, distillery } = bottle;

            return (
                <div className="card" key={bottle.id.toString()} onClick={() => this._handleOnClick(bottle)}>
                    <h3 className="card__head">{distillery}</h3>
                    <h4 className="card__subhead">{name}</h4>
                </div>
            );
        });

        return (
            <div className="container">
                <h1 className="margin-bottom-md">Scotch Library</h1>
                {bottleElements}
            </div>
        );
    }
}

export default BottleList;
