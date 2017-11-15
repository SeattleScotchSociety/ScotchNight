import { inject, observer } from "mobx-react";
import * as React from "react";

import { IBottleNote, IBottleRating } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { Input } from "./Input";
import { StarRating } from "./StarRating";

import * as format from "date-fns/format";

interface IMyNotesProps {
    view: string;
    notes: IBottleRating;
    onChange: (noteTitle: string, value: any) => void;
}

@observer
export class MyNotes extends React.Component<IMyNotesProps> {
    private flavors: string[];

    constructor(props: IMyNotesProps) {
        super(props);

        this._handleFlavorOnClick = this._handleFlavorOnClick.bind(this);

        this.flavors = ["Boozy", "Citrus", "Fire", "Floral", "Fruit", "Heavy", "Honey", "Light", "Medicinal", "Nutty", "Oily", "Rich", "Smokey", "Spicy", "Sweet", "Tobacco", "Vanilla", "Woody"];
    }

    private _handleFlavorOnClick(flavor) {
        const { notes, onChange } = this.props;
        let updatedTags = [];

        if (notes && notes.tags) {
            updatedTags = notes.tags.split(",");
        }

        const index = updatedTags.indexOf(flavor);

        if (index < 0) {
            updatedTags.push(flavor);
        } else {
            updatedTags.splice(index, 1);
        }

        onChange("tags", updatedTags.join(","));
    }

    public render() {
        const { view, notes, onChange } = this.props;

        if (view !== "notes") {
            return null;
        }

        const tags = this.flavors.map((flavor) => (<div key={flavor} onClick={this._handleFlavorOnClick.bind(null, flavor)} className={`tag ${notes && notes.tags && notes.tags.indexOf(flavor) > -1 ? "selected" : ""}`}>{flavor}</div>));
        const rating = notes && notes.rating ? notes.rating : 0;

        return (
            <div className="notes">
                <StarRating rating={rating} onChangeRating={onChange.bind(null, "rating")} />
                <h4>Flavor Profile&nbsp;&nbsp;<span className="text-xs text-300"><em>select all that apply</em></span></h4>
                <div className="text-center margin-vertical-md">
                    {tags}
                </div>
                <Input
                    type="text"
                    placeholder="Other Thoughts"
                    onChange={(e) => onChange("thoughts", e.target.value)}
                    value={notes && notes.thoughts ? notes.thoughts : ""} />
            </div>
        );
    }
}

export default MyNotes;
