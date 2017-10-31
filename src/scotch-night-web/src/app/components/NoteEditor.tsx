import { inject, observer } from "mobx-react";
import * as React from "react";

interface INoteEditorProps {
    rating: number;
    noteTitle: string;
    resetCount: number;
    onChange: () => void;
}

@observer
export class NoteEditor extends React.Component<INoteEditorProps> {
    constructor(props: INoteEditorProps) {
        super(props);
    }

    public render() {
        let { rating } = this.props;
        const { noteTitle, onChange, resetCount } = this.props;

        if (!rating) { rating = 0; }

        return (
            <div style={{ flexDirection: "column" }}>
                <h3>{noteTitle}</h3>
                <input type="range" key={`${noteTitle}${resetCount}`} min="0" max="100" value={rating} onChange={onChange} />
            </div>
        );
    }
}

export default NoteEditor;