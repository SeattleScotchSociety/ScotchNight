import { inject, observer } from "mobx-react";
import * as React from "react";

import { IBottleNote } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { MyNotes } from "./MyNotes";
import { NotesOverview } from "./NotesOverview";

interface IBottleDetailProps { store: IRootStore; }
interface IBottleDetailState {
    view: number;
}

@inject("store")
@observer
export class BottleDetail extends React.Component<IBottleDetailProps, IBottleDetailState> {
    constructor(props) {
        super(props);

        this.handleSelectView = this.handleSelectView.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

        this.state = {
            view: 0
        };
    }

    private handleSelectView(index) {
        this.setState({ view: index });
    }

    private handleOnChange(noteTitle, value) {
        const { scotchNightStore } = this.props.store;
        const { memberNotes, currentBottle, currentUser } = scotchNightStore;

        let notes = memberNotes ? { ...memberNotes } : {};
        notes[noteTitle] = value;

        scotchNightStore.setMemberNotes(notes);
    }

    public render() {
        const { view } = this.state;
        const { currentBottle, summaryNotes, memberNotes } = this.props.store.scotchNightStore;

        if (!currentBottle) {
            return null;
        }

        return (
            <div className="bottle-detail">
                <h1 className="bottle-detail__distillery">{currentBottle ? currentBottle.distillery : ''}</h1>
                <h2 className="bottle-detail__name">{currentBottle ? currentBottle.name : ''}</h2>
                <div className="btn-group">
                    <button onClick={() => this.handleSelectView(0)} className={`btn ${view === 0 ? "btn--primary" : ""}`}>Overview</button>
                    <button onClick={() => this.handleSelectView(1)} className={`btn ${view === 1 ? "btn--primary" : ""}`}>My Notes</button>
                </div>
                <NotesOverview view={view} notes={summaryNotes} thoughts={memberNotes ? memberNotes.thoughts : ""} />
                <MyNotes notes={memberNotes} view={view} onChange={this.handleOnChange} />
            </div>
        );
    }
}

export default BottleDetail;
