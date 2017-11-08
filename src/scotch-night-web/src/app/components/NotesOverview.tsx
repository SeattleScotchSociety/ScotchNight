import { inject, observer } from "mobx-react";
import * as React from "react";

import { IBottleNote } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { NoteDisplay } from "./NoteDisplay";
import { StarRating } from './StarRating';

interface INotesOverviewProps { view: number; notes: IBottleNote; tags: string; thoughts: string; }

@observer
export class NotesOverview extends React.Component<INotesOverviewProps> {
    constructor(props: INotesOverviewProps) {
        super(props);
    }

    public render() {
        const { view, notes, tags, thoughts } = this.props;

        if (view !== 0) {
            return null;
        }

        return (
            <div className="bottle-overview">
                <div className="bottle-overview__rating">
                    <StarRating rating={notes ? notes.rating : 0} />
                </div>
                <h3>My Thoughts</h3>
                <div style={{ marginTop: 10 }}>{thoughts ? thoughts : "No additional notes"}</div>
            </div>
        );
    }
}

export default NotesOverview;
