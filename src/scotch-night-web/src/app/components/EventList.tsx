import { inject, observer } from "mobx-react";
import * as React from "react";
import { orderBy } from 'lodash';

import { IEvent } from "../stores/EventStore";
import { IRootStore } from "../stores/RootStore";

import * as format from "date-fns/format";
import * as compareAsc from 'date-fns/compare_asc'

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
        let eventElements = [];
        let future, past = false;

        _.orderBy(events, ['date'], ['desc']).forEach((event) => {
            const { date, description, location, title, id } = event;

            if(!future && compareAsc(new Date(date), new Date()) > 0) {
                future = true;
                eventElements.push(<h4 key="future-head" className="event__sep">upcoming</h4>);
            }

            if(!past && compareAsc(new Date(date), new Date()) < 1) {
                past = true;
                eventElements.push(<h4 key="past-head" className="event__sep">past</h4>);
            }

            eventElements.push(
                <div className="card" key={id.toString()} onClick={() => this.onEventSelected(event)}>
                    <h3 className="card__head">{format(date, "MMMM D, YYYY")}</h3>
                    <p className="card__title">{title}</p>
                    <p className="card__description">{description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <h1 className="margin-bottom-md">Events</h1>
                {eventElements}
            </div>
        );
    }
}

export default EventList;
