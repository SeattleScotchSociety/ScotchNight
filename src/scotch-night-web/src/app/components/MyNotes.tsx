import { inject, observer } from "mobx-react";
import * as React from "react";

import { IBottleNote } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { StarRating } from './StarRating';

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

        const rating = notes && notes.rating ? notes.rating : 0;

        return (
            <div className="notes">
                <StarRating rating={rating} onChangeRating={onPressRating} />
                <h3>My Thoughts</h3>
                <textarea
                    className="notes__thoughts"
                    rows={5}
                    onChange={onChange.bind(null, "thoughts")}
                    value={notes && notes.thoughts ? notes.thoughts : ''} />
                <button className="notes__save btn btn--block btn--primary" onClick={save}>Save</button>
                <button className="notes__reset btn btn--block" onClick={reset}>Reset</button>
            </div>
        );
    }
}

export default MyNotes;
