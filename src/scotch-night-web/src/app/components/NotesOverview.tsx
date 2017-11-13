import { inject, observer } from "mobx-react";
import * as React from "react";
import { VictoryChart, VictoryBar, VictoryPolarAxis, VictoryLabel,VictoryContainer } from 'victory';

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
}

const CenterLabel = (props) => {
    const {datum, active} = props;
    const text = [ datum.x, `${datum.y}*` ];
    const baseStyle = { fill: '#333', textAnchor: "middle" };
    const style = [
      { ...baseStyle, fontSize: 10, fontWeight: "bold"},
      { ...baseStyle, fontSize: 8 }
    ];

    if(active) {
        return (
            <VictoryLabel text={text} style={style} x={175} y={150} />
        );
    }

    return null;
}

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

        let profile = [
            { flavor: "Boozy", count: 1 },
            { flavor: "Heavy", count: 10 },
            { flavor: "Medicinal", count: 10 },
            { flavor: "Spicy", count: 20 },
            { flavor: "Fire", count: 1},
            { flavor: "Peaty", count: 4 },
            { flavor: "Tobacco", count: 0 },
            { flavor: "Nutty", count: 0 },
            { flavor: "Rich", count: 0 },
            { flavor: "Citrus", count: 1 },
            { flavor: "Fruit", count: 20 },
            { flavor: "Floral", count: 0 },
            { flavor: "Woody", count: 0 },
            { flavor: "Honey", count: 40 },
            { flavor: "Sweet", count: 0 },
            { flavor: "Vanilla", count: 0 },
            { flavor: "Light", count: 1 },
            { flavor: "Oily", count: 10 },
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
                                      { target: "labels", mutation: () => ({ active: true }) },
                                      { target: "data", mutation: () => ({ active: true }) }
                                    ];
                                  },
                                  onMouseOut: () => {
                                    return [
                                      { target: "labels", mutation: () => ({ active: false }) },
                                      { target: "data", mutation: () => ({ active: false }) }
                                    ];
                                  }
                                }
                              }]}>
                        <Center />
                        <VictoryPolarAxis
                            labelPlacement="parallel" style={{tickLabels: { fontSize: 10 }}} />
                        <VictoryPolarAxis dependentAxis
                            style={{
                              axis: {stroke: "none"},
                              tickLabels: { fill: "none"},
                               grid: { stroke: "none" }
                            }}/>
                            <VictoryBar
                                data={profile}
                                x="flavor"
                                y="count"
                                style={{ data: { fill: (d, a) => a ? "#BFE0DF" : "#80C0BE", width: 20 }}}
                                labelComponent={<CenterLabel />}
                                labels={(d, a)=> a ? d.x : ''} />
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
