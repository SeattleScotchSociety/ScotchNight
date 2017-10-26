import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

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
            return (<Button key={event.id}>{event.title}</Button>);
        });

        return (
            <div>
                <h3>My Events</h3>
                {eventElements}
            </div>
        );
    }
}

export default EventList;