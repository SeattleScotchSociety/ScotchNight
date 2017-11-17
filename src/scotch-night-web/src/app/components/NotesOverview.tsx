import { inject, observer } from "mobx-react";
import * as React from "react";
import { VictoryBar, VictoryChart, VictoryContainer, VictoryLabel, VictoryPolarAxis } from "victory";

import { IBottleNote } from "../stores/BottleStore";
import { IRootStore } from "../stores/RootStore";

import { NoteDisplay } from "./NoteDisplay";
import { StarRating } from "./StarRating";

const Center = (props) => {
    const { origin } = props;
    const circleStyle = { stroke: "#80C0BE", strokeWidth: 2, fill: "#BFE0DF" };

    return (
        <g>
            <circle
                cx={origin.x} cy={origin.y} r={30} style={circleStyle}
            />
        </g>
    );
};

const CenterLabel = (props) => {
    const { datum, active } = props;
    const text = [datum.x, `${datum.y}*`];
    const baseStyle = { fill: "#333", textAnchor: "middle" };
    const style = [
        { ...baseStyle, fontSize: 10, fontWeight: "bold" },
        { ...baseStyle, fontSize: 8 }
    ];

    if (active) {
        return (
            <VictoryLabel text={text} style={style} x={175} y={150} />
        );
    }

    return null;
};

interface INotesOverviewProps { view: string; notes: IBottleNote; thoughts: string; }

@observer
export class NotesOverview extends React.Component<INotesOverviewProps> {
    constructor(props: INotesOverviewProps) {
        super(props);

        this.getTagCount = this.getTagCount.bind(this);
    }

    private getTagCount(tag) {
        const { notes } = this.props;

        if (notes && notes.tags) {
            const count = notes.tags.get(tag);

            if (count) {
                return count;
            }
        }

        return 0;
    }

    public render() {
        const { view, notes, thoughts } = this.props;

        if (view !== "overview") {
            return null;
        }

        const profile = [
            { flavor: "Boozy", count: this.getTagCount("Boozy") },
            { flavor: "Heavy", count: this.getTagCount("Heavy") },
            { flavor: "Medicinal", count: this.getTagCount("Medicinal") },
            { flavor: "Spicy", count: this.getTagCount("Spicy") },
            { flavor: "Fire", count: this.getTagCount("Fire") },
            { flavor: "Smokey", count: this.getTagCount("Peaty") },
            { flavor: "Tobacco", count: this.getTagCount("Tobacco") },
            { flavor: "Woody", count: this.getTagCount("Woody") },
            { flavor: "Nutty", count: this.getTagCount("Nutty") },
            { flavor: "Rich", count: this.getTagCount("Rich") },
            { flavor: "Citrus", count: this.getTagCount("Citrus") },
            { flavor: "Fruit", count: this.getTagCount("Fruit") },
            { flavor: "Floral", count: this.getTagCount("Floral") },
            { flavor: "Honey", count: this.getTagCount("Honey") },
            { flavor: "Sweet", count: this.getTagCount("Sweet") },
            { flavor: "Vanilla", count: this.getTagCount("Vanilla") },
            { flavor: "Light", count: this.getTagCount("Light") },
            { flavor: "Oily", count: this.getTagCount("Oily") }
        ];

        return (
            <div className="bottle-overview">
                <div className="bottle-overview__rating">
                    <StarRating rating={notes ? notes.rating : 0} onChangeRating={null} />
                </div>
                <div className="margin-bottom-md">
                    <VictoryChart
                        polar
                        width={350}
                        height={300}
                        innerRadius={30}
                        animate={{ duration: 500, onLoad: { duration: 500 } }}
                        events={[{
                            childName: "all",
                            target: "data",
                            eventHandlers: {
                                onMouseOver: () => {
                                    return [
                                        { target: "labels", mutation: (a) => ({ active: true }) },
                                        { target: "data", mutation: () => ({ active: true }) }
                                    ];
                                },
                                onMouseOut: () => {
                                    return [
                                        { target: "labels", mutation: () => ({ active: false }) },
                                        { target: "data", mutation: () => ({ active: false }) }
                                    ];
                                },
                                onTouchStart: () => {
                                    return [
                                        { target: "labels", mutation: () => ({ active: true }) },
                                        { target: "data", mutation: () => ({ active: true }) }
                                    ];
                                },
                                onTouchEnd: () => {
                                    return [
                                        { target: "labels", mutation: () => ({ active: false }) },
                                        { target: "data", mutation: () => ({ active: false }) }
                                    ];
                                }
                            }
                        }]}>
                        <Center />
                        <VictoryPolarAxis
                            labelPlacement="parallel" style={{ tickLabels: { fontSize: 10 } }} />
                        <VictoryPolarAxis dependentAxis
                            style={{
                                axis: { stroke: "none" },
                                tickLabels: { fill: "none" },
                                grid: { stroke: "none" }
                            }} />
                        <VictoryBar
                            data={profile}
                            x="flavor"
                            y="count"
                            style={{ data: { fill: (d, a) => a ? "#BFE0DF" : "#80C0BE", width: 20 } }}
                            labelComponent={<CenterLabel />}
                            labels={(d, a) => a ? d.x : ""} />
                    </VictoryChart>
                </div>
                <h4>My Thoughts</h4>
                <div className="margin-bottom-md">{thoughts ? thoughts : "No additional notes"}</div>
                <div className="text-xs"><em>* Based on flavor profile selections</em></div>
            </div>
        );
    }
}

export default NotesOverview;
