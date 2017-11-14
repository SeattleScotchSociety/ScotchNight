import { inject, observer } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";

import { IBottle, IBottleNote } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { EditBottle } from "./EditBottle";
import { MyNotes } from "./MyNotes";
import { NotesOverview } from "./NotesOverview";

interface IBottleDetailProps { store: IRootStore; }
interface IBottleDetailState {
    view: number;
}

@inject("store")
@observer
export class BottleDetail extends React.Component<IBottleDetailProps, IBottleDetailState> {
    private edit: EditBottle;

    constructor(props) {
        super(props);

        this.handleSelectView = this.handleSelectView.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.clearCurrentBottle = this.clearCurrentBottle.bind(this);
        this.handleOnEditBottle = this.handleOnEditBottle.bind(this);

        this.state = {
            view: 0
        };
    }

    private handleOnEditBottle() {
        this.edit.open();
    }

    private handleSelectView(index) {
        this.setState({ view: index });
    }

    private handleOnChange(noteTitle, value) {
        const { scotchNightStore } = this.props.store;
        const { memberNotes, currentBottle, currentUser } = scotchNightStore;

        const notes = memberNotes ? { ...memberNotes } : {};
        notes[noteTitle] = value;

        scotchNightStore.setMemberNotes(notes);
    }

    private clearCurrentBottle() {
        this.props.store.scotchNightStore.setCurrentBottle(null);
    }

    public render() {
        const { view } = this.state;
        const { currentBottle, summaryNotes, memberNotes, currentEvent } = this.props.store.scotchNightStore;

        if (!currentBottle) {
            return null;
        }

        return (
            <div className="bottle-detail">
                {
                    currentEvent ?
                        <Link to={`/events/${currentEvent.id}`} onClick={this.clearCurrentBottle}>{`< Back to Event`}</Link> :
                        <Link to="/bottles" onClick={this.clearCurrentBottle}>{`< Back to Library`}</Link>
                }
                <h1 className="margin-top-md bottle-detail__distillery">{currentBottle ? currentBottle.distillery : ""}</h1>
                <h2 className="bottle-detail__name">{currentBottle ? currentBottle.name : ""}</h2>
                <div className="btn-group">
                    <button onClick={() => this.handleSelectView(0)} className={`btn ${view === 0 ? "btn--primary" : ""}`}>Overview</button>
                    <button onClick={() => this.handleSelectView(1)} className={`btn ${view === 1 ? "btn--primary" : ""}`}>My Notes</button>
                </div>
                <button className="btn btn--primary btn--block" onClick={this.handleOnEditBottle}>Edit Bottle</button>
                <EditBottle ref={(edit) => { this.edit = edit; }} store={this.props.store} bottle={currentBottle} />
                <NotesOverview view={view} notes={summaryNotes} thoughts={memberNotes ? memberNotes.thoughts : ""} />
                <MyNotes notes={memberNotes} view={view} onChange={this.handleOnChange} />
            </div>
        );
    }
}

export default BottleDetail;
