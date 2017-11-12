import { inject, observer } from "mobx-react";
import * as React from "react";

interface IStarRatingProps {
    rating: number;
    onChangeRating: (rating: number) => void;
}

@observer
export class StarRating extends React.Component<IStarRatingProps> {
    constructor(props) {
        super(props);
        this._handleOnClick = this._handleOnClick.bind(this);
    }

    private _handleOnClick(index) {
        const { onChangeRating } = this.props;

        if (onChangeRating) {
            onChangeRating(index + 1);
        }
    }

    public render() {
        const { rating } = this.props;
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<i key={`star${i}`} className="fa fa-star star--filled" onClick={() => this._handleOnClick(i)} />);
            } else {
                stars.push(<i key={`star${i}`} className="fa fa-star star--empty" onClick={() => this._handleOnClick(i)} />);
            }
        }

        return (
            <div className="star-rating">
                {stars}
            </div>
        );
    }
}

export default StarRating;
