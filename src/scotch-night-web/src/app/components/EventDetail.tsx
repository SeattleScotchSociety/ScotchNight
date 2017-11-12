import { inject, observer } from "mobx-react";
import * as React from "react";

import { IRootStore } from "../stores/RootStore";
import { AddBottle } from "./AddBottle";
import { Modal } from "./Modal";
import { TastingMenu } from "./TastingMenu";

import * as format from "date-fns/format";

interface IEventDetailProps { store: IRootStore; }

@inject("store")
@observer
export class EventDetail extends React.Component<IEventDetailProps> {
    private add: AddBottle;

    constructor(props: IEventDetailProps) {
        super(props);
        this.handleOnAddBottle = this.handleOnAddBottle.bind(this);
    }

    public render() {
        const { scotchNightStore } = this.props.store;
        const { currentEvent } = scotchNightStore;

        if (!currentEvent) {
            return null;
        }

        const { date, description, location, title } = currentEvent;

        return (
            <div className="container">
                <h1>{title}</h1>
                <p className="margin-vertical-md"><em>{description}</em></p>
                <p className="event__detail"><i className="fa fa-fw fa-calendar-o" />&nbsp;{format(date, "MMMM D, YYYY")}</p>
                <p className="event__detail"><i className="fa fa-fw fa-clock-o" />&nbsp;{format(date, "h:mm aa")}</p>
                <p className="event__detail"><i className="fa fa-fw fa-map-marker" />&nbsp;{location.name}</p>
                <TastingMenu store={this.props.store} />
                <button className="btn btn--primary btn--block" onClick={this.handleOnAddBottle}>Add Bottle</button>
                <AddBottle ref={(add) => { this.add = add; }} store={this.props.store} />
            </div>
        );
    }

    private handleOnAddBottle() {
        const { scotchNightStore } = this.props.store;
        const { navigation } = this.props.store;
        navigation.push(`${scotchNightStore.currentEvent.id}/add-bottle`);
    }
}

export default EventDetail;
