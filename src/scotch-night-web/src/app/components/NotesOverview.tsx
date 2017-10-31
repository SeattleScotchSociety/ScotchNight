import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

import StarRatingComponent from "react-star-rating-component";

import { IBottleNote } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { NoteDisplay } from "./NoteDisplay";

interface INotesOverviewProps { view: number; notes: IBottleNote; thoughts: string; }

@observer
export class NotesOverview extends React.Component<INotesOverviewProps> {
    constructor(props: INotesOverviewProps) {
        super(props);
    }

    public render() {
        const { view, notes, thoughts } = this.props;

        if (view !== 0) {
            return null;
        }

        return (
            <div style={{ flexDirection: "column" }}>
                <div style={{ flexDirection: "row", justifyContent: "center", marginVertical: 15 }}>
                    {notes ? notes.rating : 0}
                </div>
                <NoteDisplay note="Finish" rating={notes ? notes.finish : 0} />
                <NoteDisplay note="Fruity" rating={notes ? notes.fruity : 0} />
                <NoteDisplay note="Vanilla" rating={notes ? notes.vanilla : 0} />
                <NoteDisplay note="Smokey" rating={notes ? notes.smokey : 0} />
                <NoteDisplay note="Citrus" rating={notes ? notes.citrus : 0} />
                <NoteDisplay note="Oily" rating={notes ? notes.oily : 0} />
                <NoteDisplay note="Peppery" rating={notes ? notes.peppery : 0} />
                <h3>My Thoughts</h3>
                <div style={{ marginTop: 10 }}>{thoughts ? thoughts : "No additional notes"}</div>
            </div>
        );
    }
}

export default NotesOverview;