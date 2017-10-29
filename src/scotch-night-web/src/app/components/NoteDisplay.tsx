import { inject, observer } from "mobx-react";
import * as React from "react";

interface INoteDisplayProps { note: string; rating: number; }

@observer
export class NoteDisplay extends React.Component<INoteDisplayProps> {
    constructor(props: INoteDisplayProps) {
        super(props);
    }

    public render() {
        const { note } = this.props;
        let { rating } = this.props;

        if (!rating) { rating = 0; }

        return (
            <div style={{ flexDirection: "column" }}>
                <div className="subheader">{note}</div>
                <div className="notes">
                    <div style={{ backgroundColor: "#a6a6a5", width: `${rating}%`, height: "100%" }} />
                </div>
            </div>
        );
    }
}

export default NoteDisplay;