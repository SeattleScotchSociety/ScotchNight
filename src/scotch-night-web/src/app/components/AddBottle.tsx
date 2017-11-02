import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button, ButtonGroup } from "reactstrap";

import { Bottle, IBottle } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { MyNotes } from "./MyNotes";
import { NotesOverview } from "./NotesOverview";

interface IAddBottleProps { store: IRootStore; }
interface IAddBottleState {
    bottle: IBottle;
}

@inject("store")
@observer
export class AddBottle extends React.Component<IAddBottleProps, IAddBottleState> {
    private distillery: any;
    private name: any;
    private age: any;
    private descriptionInput: any;

    constructor(props) {
        super(props);

        this.state = {
            bottle: { id: undefined, distillery: "", age: 0, description: "", name: "" }
        };

        this.handleOnAddPress = this.handleOnAddPress.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    public render() {
        const { bottle } = this.state;

        return (
            <div>
                <div style={{ paddingVertical: 20 }}>
                    <div className="">
                        <input
                            ref={(view) => {
                                this.distillery = view;
                            }}
                            value={bottle.distillery}
                            placeholder="Distillery"
                            onChange={this.handleOnChange.bind(this, "distillery")}
                            className="textInput"
                        />
                    </div>
                    <div className="">
                        <input
                            ref={(view) => {
                                this.name = view;
                            }}
                            value={bottle.name}
                            placeholder="Name"
                            onChange={this.handleOnChange.bind(this, "name")}
                            className="textInput"
                        />
                    </div>
                    <div className="">
                        <input
                            ref={(view) => {
                                this.age = view;
                            }}
                            value={bottle.age}
                            placeholder="Age"
                            onChange={this.handleOnChange.bind(this, "age")}
                            className="textInput"
                        />
                    </div>
                </div>
                <div style={{ paddingVertical: 20 }}>
                    <div className="">
                        <textarea
                            placeholder="Description"
                            ref={(view) => { this.descriptionInput = view; }}
                            value={bottle.description}
                            onChange={this.handleOnChange.bind(this, "description")}
                            style={{ minHeight: 60 }}
                            className="textInput"
                        />
                    </div>
                </div>
                <div style={{ paddingVertical: 20 }}>
                    <Button onClick={this.handleOnAddPress} color="#009688">Add Bottle</Button>
                </div>
            </div>
        );
    }

    private handleOnChange = (property, event) => {
        const { bottle } = this.state;
        bottle[property] = event.target.value;

        this.setState({ bottle });
    }

    private handleOnAddPress = () => {
        const { bottleStore, eventStore, navigation, scotchNightStore } = this.props.store;
        const { bottle } = this.state;
        const { currentEvent } = scotchNightStore;

        bottleStore.addBottle(bottle).then((newBottle: IBottle) => {
            eventStore.addBottle(currentEvent, newBottle);

            navigation.goBack();
        });
    }
}

export default AddBottle;