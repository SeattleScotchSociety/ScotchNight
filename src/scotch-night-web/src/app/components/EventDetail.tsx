import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

import { IRootStore } from "../stores/RootStore";
import { TastingMenu } from "./TastingMenu";

import * as format from "date-fns/format";

interface IEventDetailProps { store: IRootStore; }

@inject("store")
@observer
export class EventDetail extends React.Component<IEventDetailProps> {
    constructor(props: IEventDetailProps) {
        super(props);

        this.handleOnPress = this.handleOnPress.bind(this);
        this.handleOnAddBottle = this.handleOnAddBottle.bind(this);
    }

    public render() {
        const { scotchNightStore } = this.props.store;
        const { date, description, location, title } = scotchNightStore.currentEvent;

        return (
            <div className="container">
                <div className="eventContainer">
                    <div className="eventTitle">{title}</div>
                    <div style={{ flexDirection: "row", marginLeft: 15, marginBottom: 5 }}>
                        {
                            location ?
                                <div style={{ flexDirection: "row", marginRight: 10 }}>
                                    <div id="location-pin" />
                                    <div className="eventDetail">{location}</div>
                                </div> : null
                        }
                        <div style={{ flexDirection: "row" }}>
                            <div id="calendar" style={{ color: "#80807f", size: 16 }} />
                            <div className="eventDetail">{format(date, "dddd, MMMM, YYYY, h:mm")}</div>
                        </div>
                    </div>
                    <div className="event-description">{description}</div>
                </div>
                <div className="menuHeader">Tasting Menu</div>
                <TastingMenu store={this.props.store} />
                <Button style={{ marginTop: 20, backgroundColor: "#00817d" }} onClick={this.handleOnAddBottle}>Add Bottle</Button>
            </div>
        );
    }

    private handleOnPress(bottle) {
        console.log(bottle);
    }

    private handleOnAddBottle() {
        const { navigation } = this.props.store;
        navigation.push("/addBottle");
    }
}

export default EventDetail;