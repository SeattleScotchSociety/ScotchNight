import { inject, observer } from "mobx-react";
import * as React from "react";

import { IRootStore } from "../stores/RootStore";
import { TastingMenu } from "./TastingMenu";
import { AddBottle } from "./AddBottle";
import { Modal } from './Modal';

import * as format from "date-fns/format";

interface IEventDetailProps { store: IRootStore; }

@inject("store")
@observer
export class EventDetail extends React.Component<IEventDetailProps> {
    add: AddBottle;

    constructor(props: IEventDetailProps) {
        super(props);
        this.handleOnAddBottle = this.handleOnAddBottle.bind(this);
    }

    private handleOnAddBottle() {
        const { scotchNightStore } = this.props.store;
        const { navigation } = this.props.store;

        this.add.wrappedInstance.open();
    }

    public render() {
        const { store } = this.props;
        const { scotchNightStore } = store;
        const { date, description, location, title } = scotchNightStore.currentEvent;

        return (
            <div className="event">
                <h1 className="event__title">{title}</h1>
                <p className="event__desc">{description}</p>
                <p className="event__detail"><i className="fa fa-fw fa-calendar-o"/>&nbsp;{format(date, 'MMMM D, YYYY')}</p>
                <p className="event__detail"><i className="fa fa-fw fa-clock-o"/>&nbsp;{format(date, 'h:mm aa')}</p>
                <p className="event__detail"><i className="fa fa-fw fa-map-marker"/>&nbsp;{location.name}</p>
                <TastingMenu store={this.props.store} />
                <button className="btn btn--primary btn--block" onClick={this.handleOnAddBottle}>Add Bottle</button>
                <AddBottle ref={(add) => { this.add = add; }} store={store} />
            </div>
        );
    }
}

export default EventDetail;
