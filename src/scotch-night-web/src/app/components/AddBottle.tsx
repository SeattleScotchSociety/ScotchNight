import { observer } from "mobx-react";
import * as React from "react";

import { Bottle, IBottle } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { Modal } from "./Modal";
import { Input } from "./Input";

interface IAddBottleProps { store: IRootStore; }
interface IAddBottleState { bottle: IBottle; }

@observer
export class AddBottle extends React.Component<IAddBottleProps, IAddBottleState> {
    modal: Modal;
    wrappedInstance: AddBottle;

    constructor(props) {
        super(props);

        this.state = {
            bottle: { id: undefined, distillery: "", age: undefined, description: "", name: "" }
        };

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.open = this.open.bind(this);

    }

    public open() {
        this.modal.open();
    }

    private handleOnChange = (property, event) => {
        const { bottle } = this.state;
        bottle[property] = event.target.value;

        this.setState({ bottle });
    }

    private handleOnClick = () => {
        const { bottleStore, eventStore, scotchNightStore } = this.props.store;
        const { bottle } = this.state;
        const { currentEvent } = scotchNightStore;

        bottleStore.addBottle(bottle).then((newBottle: IBottle) => {
            eventStore.addBottle(currentEvent, newBottle);
            this.modal.close();
        });
    }

    public render() {
        const { bottle } = this.state;

        return (
            <Modal className="add-bottle" ref={(modal) => { this.modal = modal; }}>
                <h2>Add a New Bottle</h2>
                <Input
                    type="text"
                    value={bottle.distillery}
                    placeholder="Distillery"
                    onChange={this.handleOnChange.bind(this, "distillery")}/>
                <Input
                    type="text"
                    value={bottle.name}
                    placeholder="Name"
                    onChange={this.handleOnChange.bind(this, "name")}/>
                <Input
                    type="text"
                    value={bottle.age ? bottle.age : ''}
                    placeholder="Age"
                    onChange={this.handleOnChange.bind(this, "age")}/>
                <Input
                    type="text"
                    placeholder="Description"
                    value={bottle.description}
                    onChange={this.handleOnChange.bind(this, "description")}/>
                <button className="btn btn--primary btn--block" onClick={this.handleOnClick}>Add Bottle</button>
            </Modal>
        );
    }
}

export default AddBottle;
