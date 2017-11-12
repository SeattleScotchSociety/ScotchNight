import { observer } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";

import { IScotchNightStore } from "../stores/ScotchNightStore";

interface INavigationBarProps { scotchNightStore: IScotchNightStore; }
interface INavigationBarState { activeIndex: number; }

@observer
export class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {
    constructor(props: INavigationBarProps) {
        super(props);

        this.state = {
            activeIndex: 0
        };

        this.onLinkClick = this.onLinkClick.bind(this);
    }

    private onLinkClick(index) {
        this.setState({ activeIndex: index });
    }

    public render() {
        const links = [
            {
                text: "Events",
                link: "/"
            },
            {
                text: "Bottles",
                link: "/bottles"
            }
        ];

        const navLinks = links.map((link, index) => {

            if (index === this.state.activeIndex) {
                return (<Link key={index} className="nav-link active" to={link.link} onClick={() => this.onLinkClick(index)}>{link.text}</Link>);
            }

            return (<Link key={index} className="nav-link" to={link.link} onClick={() => this.onLinkClick(index)}>{link.text}</Link>);
        });

        return (
            <nav className="nav">
                {navLinks}
            </nav>
        );
    }
}