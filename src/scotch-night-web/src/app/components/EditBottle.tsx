import { observer } from "mobx-react";
import * as React from "react";

import { Bottle, IBottle } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { Input } from "./Input";
import { Modal } from "./Modal";

interface IEditBottleProps { store: IRootStore; bottle: IBottle; }
interface IEditBottleState { bottle: IBottle; }

@observer
export class EditBottle extends React.Component<IEditBottleProps, IEditBottleState> {
    private modal: Modal;
    private wrappedInstance: EditBottle;

    constructor(props: IEditBottleProps) {
        super(props);

        const { bottle: editBottle } = props;

        this.state = {
            bottle: { ...editBottle }
        };

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.open = this.open.bind(this);
    }

    private handleOnChange = (property, event) => {
        const { bottle } = this.state;
        bottle[property] = event.target.value;

        this.setState({ bottle });
    }

    private handleOnClick = () => {
        const { bottleStore } = this.props.store;
        const { bottle } = this.state;

        bottleStore.editBottle(bottle).then((editedBottle: IBottle) => {
            this.modal.close();
        });
    }

    public open() {
        this.modal.open();
    }

    public render() {
        const { bottle } = this.state;

        return (
            <Modal className="add-bottle" ref={(modal) => { this.modal = modal; }}>
                <h2 className="margin-bottom-md">Add a New Bottle</h2>
                <Input
                    type="text"
                    value={bottle.distillery}
                    placeholder="Distillery"
                    onChange={this.handleOnChange.bind(this, "distillery")} />
                <Input
                    type="text"
                    value={bottle.name}
                    placeholder="Name"
                    onChange={this.handleOnChange.bind(this, "name")} />
                <Input
                    type="text"
                    value={bottle.age ? bottle.age : ""}
                    placeholder="Age"
                    onChange={this.handleOnChange.bind(this, "age")} />
                <Input
                    type="text"
                    placeholder="Description"
                    value={bottle.description}
                    onChange={this.handleOnChange.bind(this, "description")} />
                <button className="btn btn--primary btn--block" onClick={this.handleOnClick}>Save Bottle</button>
            </Modal>
        );
    }
}

export default EditBottle;
