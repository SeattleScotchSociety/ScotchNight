import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button, ButtonGroup } from "reactstrap";

import { IBottleNote } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { MyNotes } from "./MyNotes";
import { NotesOverview } from "./NotesOverview";

interface IBottleDetailProps { store: IRootStore; }
interface IBottleDetailState {
    notes: IBottleNote;
    resetCount: number;
    view: number;
    rating: number;
}

@inject("store")
@observer
export class BottleDetail extends React.Component<IBottleDetailProps, IBottleDetailState> {
    constructor(props) {
        super(props);

        const { scotchNightStore } = this.props.store;

        this.handleOnPressRating = this.handleOnPressRating.bind(this);
        this.handleSelectView = this.handleSelectView.bind(this);
        this.handleOnResetNotes = this.handleOnResetNotes.bind(this);
        this.handleOnSaveNotes = this.handleOnSaveNotes.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

        const notes: IBottleNote = scotchNightStore.memberNotes ? { ...scotchNightStore.memberNotes } : null;

        this.state = {
            resetCount: 0,
            notes,
            rating: 0,
            view: 0
        };
    }

    public componentWillReceiveProps(nextProps) {
        const { scotchNightStore } = this.props.store;

        const notes = scotchNightStore.memberNotes ? { ...scotchNightStore.memberNotes } : null;

        this.setState({
            notes
        });
    }

    public render() {
        const { view, resetCount } = this.state;
        const { currentBottle, summaryNotes, memberNotes } = this.props.store.scotchNightStore;

        return (
            <div className="container">
                <div style={{ marginBottom: 100 }}>
                    <h2>{currentBottle.distillery} {currentBottle.name}</h2>
                    <ButtonGroup
                        style={{ height: 30, marginTop: 20 }}
                    >
                        <Button>Overview></Button>
                        <Button>My Notes</Button>
                    </ButtonGroup>
                    <NotesOverview view={view} notes={summaryNotes} thoughts={memberNotes ? memberNotes.thoughts : ""} tags={memberNotes ? memberNotes.tags : ""} />
                    <MyNotes resetCount={resetCount} notes={memberNotes} view={view} onPressRating={this.handleOnPressRating} reset={this.handleOnResetNotes} save={this.handleOnSaveNotes} onChange={this.handleOnChange} />
                </div>
            </div>
        );
    }

    private handleSelectView(index) {
        this.setState({ view: index });
    }

    private handleOnPressRating(rating: number) {
        this.setState({ notes: { ...this.state.notes, rating } });
    }

    private handleOnChange(noteTitle, value) {
        const update = { ...this.state.notes };
        update[noteTitle] = value;
        this.setState({ notes: update });
    }

    private handleOnSaveNotes() {
        // let { addReview } = this.props.actions;

        // addReview(this.state.notes);

        // this.setState({ view: 0 });
        // // this.view.scrollTo({ x: 0, y: 0, animated: true });
    }

    private handleOnResetNotes() {
        // const notes = Object.assign({}, this.props.navigation.state.params.bottle.memberNotes);
        // this.setState({ resetCount: this.state.resetCount + 1, notes });
    }
}

export default BottleDetail;