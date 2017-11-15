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
    view: string;
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
            view: "overview"
        };
    }

    private handleOnEditBottle() {
        this.edit.open();
    }

    private handleSelectView(index) {
        const { scotchNightStore } = this.props.store;

        if(index === 'overview') {
            scotchNightStore.updateSummaryNotes();
        }

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
            <div className="container">
                {
                    currentEvent ?
                        <Link to={`/events/${currentEvent.id}`} onClick={this.clearCurrentBottle}>{`< Back to Event`}</Link> :
                        <Link to="/bottles" onClick={this.clearCurrentBottle}>{`< Back to Library`}</Link>
                }
                <h1 className="margin-top-md bottle-detail__distillery">{currentBottle ? currentBottle.distillery : ""}</h1>
                <h2 className="margin-bottom-md bottle-detail__name">{currentBottle ? currentBottle.name : ""}</h2>
                <div className="btn-group">
                    <button onClick={() => this.handleSelectView("overview")} className={`btn ${view === "overview" ? "btn--primary" : ""}`}>Overview</button>
                    <button onClick={() => this.handleSelectView("notes")} className={`btn ${view === "notes" ? "btn--primary" : ""}`}>My Notes</button>
                </div>
                <EditBottle ref={(edit) => { this.edit = edit; }} store={this.props.store} bottle={currentBottle} />
                <NotesOverview view={view} notes={summaryNotes} thoughts={memberNotes ? memberNotes.thoughts : ""} />
                <MyNotes notes={memberNotes} view={view} onChange={this.handleOnChange} />
                <button className="btn btn--primary btn--block margin-vertical-md" onClick={this.handleOnEditBottle}>Edit Bottle</button>
            </div>
        );
    }
}

export default BottleDetail;
