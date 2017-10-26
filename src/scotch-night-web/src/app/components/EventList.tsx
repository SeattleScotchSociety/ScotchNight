import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

import { IEvent } from "../stores/EventStore";
import { IRootStore } from "../stores/RootStore";

interface IEventListProps { store: IRootStore; }

@inject("store")
@observer
export class EventList extends React.Component<IEventListProps> {
    constructor(props: IEventListProps) {
        super(props);
    }

    public render() {
        const { events } = this.props.store.eventStore;
        const eventElements = events.map((event) => {
            return (<Button key={event.id} onClick={() => this.onEventSelected(event)}>{event.title}</Button>);
        });

        return (
            <div>
                <h3>My Events</h3>
                {eventElements}
            </div>
        );
    }

    private onEventSelected(event: IEvent) {
        const { scotchNightStore, navigation } = this.props.store;

        scotchNightStore.setCurrentEvent(event);

        navigation.push(`/events/${event.id}`);
    }
}

export default EventList;