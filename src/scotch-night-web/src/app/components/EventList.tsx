import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

import { IEvent } from "../stores/EventStore";
import { IRootStore } from "../stores/RootStore";

import * as format from "date-fns/format";

interface IEventListProps { store: IRootStore; }

@inject("store")
@observer
export class EventList extends React.Component<IEventListProps> {
    constructor(props: IEventListProps) {
        super(props);
    }

    private onEventSelected(event: IEvent) {
        const { scotchNightStore, navigation } = this.props.store;

        scotchNightStore.setCurrentEvent(event);

        navigation.push(`/events/${event.id}`);
    }

    public render() {
        const { events } = this.props.store.eventStore;
        const eventElements = events.map((event) => {
            const { date, description, location, title } = event;

            return (
                <div className="box box-action" key={event.id} onClick={() => this.onEventSelected(event)}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p><i className="fa fa-calendar"/>&nbsp;{format(date, "dddd, MMM D, YYYY")}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <h1>My Events</h1>
                <div className="events">
                    {eventElements}
                </div>
            </div>
        );
    }
}

export default EventList;
