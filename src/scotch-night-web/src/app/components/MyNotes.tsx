import { inject, observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

import StarRatingComponent from "react-star-rating-component";

import { IBottleNote } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { NoteEditor } from "./NoteEditor";
import { TastingMenu } from "./TastingMenu";

import * as format from "date-fns/format";

interface IMyNotesProps {
    onPressRating: (rating: number) => void;
    view: number;
    notes: IBottleNote;
    save: () => void;
    reset: () => void;
    resetCount: number;
    onChange: (noteTitle: string, value: number) => void;
}

@observer
export class MyNotes extends React.Component<IMyNotesProps> {
    constructor(props: IMyNotesProps) {
        super(props);
    }

    public render() {
        const { onPressRating, view, notes, save, reset, resetCount, onChange } = this.props;

        if (view !== 1) {
            return null;
        }

        const rating = notes.rating ? notes.rating : 0;

        return (
            <div>
                <div style={{ "flex-direction": "row", "justify-content": "center", "margin-vertical": 15 }}>
                    <StarRatingComponent name="overallRating" value={rating} onStarClick={onPressRating} />
                </div>
                <NoteEditor resetCount={resetCount} noteTitle="Finish" rating={notes.finish} onChange={onChange.bind(null, "finish")} />
                <NoteEditor resetCount={resetCount} noteTitle="Fruity" rating={notes.fruity} onChange={onChange.bind(null, "fruity")} />
                <NoteEditor resetCount={resetCount} noteTitle="Vanilla" rating={notes.vanilla} onChange={onChange.bind(null, "vanilla")} />
                <NoteEditor resetCount={resetCount} noteTitle="Smokey" rating={notes.smokey} onChange={onChange.bind(null, "smokey")} />
                <NoteEditor resetCount={resetCount} noteTitle="Citrus" rating={notes.citrus} onChange={onChange.bind(null, "citrus")} />
                <NoteEditor resetCount={resetCount} noteTitle="Oily" rating={notes.oily} onChange={onChange.bind(null, "oily")} />
                <NoteEditor resetCount={resetCount} noteTitle="Peppery" rating={notes.peppery} onChange={onChange.bind(null, "peppery")} />
                <div>
                    <h3>My Tags</h3>
                    {notes.tags}
                </div>
                <div style={{ "flex-direction": "column" }}>
                    <h3>My Thoughts</h3>
                    <textarea
                        rows={5}
                        onChange={onChange.bind(null, "thoughts")}
                        style={{ flex: 1, height: 45, marginTop: 5, marginHorizontal: -15, padding: "20 5", borderColor: "#ccc", borderWidth: 1 }}
                    >
                        {notes.thoughts}
                    </textarea>
                </div>
                <Button title="Save" backgroundColor="#00817d" style={{ marginVertical: 15 }} onPress={save} />
                <Button title="Reset" onPress={reset} />
            </div>
        );
    }
}

export default MyNotes;