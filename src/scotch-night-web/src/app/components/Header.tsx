import { observer } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";

import Auth from "../services/Auth";
import { IScotchNightStore } from "../stores/ScotchNightStore";

interface IHeaderProps { scotchNightStore: IScotchNightStore; auth: any; location: any; }
interface IHeaderState { menuIsOpen: boolean; }

@observer
export class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props) {
        super(props);

        this.onClickMenu = this.onClickMenu.bind(this);
        this.onClickLink = this.onClickLink.bind(this);

        this.state = {
            menuIsOpen: false
        };
    }

    private onClickMenu() {
        const { menuIsOpen } = this.state;
        this.setState({ menuIsOpen: !menuIsOpen });
    }

    private onClickLink() {
        this.props.scotchNightStore.setCurrentBottle(null);
        this.props.scotchNightStore.setCurrentEvent(null);
        this.setState({ menuIsOpen: false });
    }

    public render() {
        const { auth, location } = this.props;
        const { menuIsOpen } = this.state;
        const { currentUser } = this.props.scotchNightStore;

        return (
            <nav>
                <div className={`header ${location.pathname === "/login" ? "header-login" : ""}`}>
                    <img src={`/src/app/images/SeattleScotchSocietyLogo_${location.pathname === "/login" ? "white" : "teal"}.svg`} />
                    {auth.isAuthenticated() ?
                        <div className={`hamburger hamburger--squeeze ${menuIsOpen ? "is-active" : ""}`} onClick={this.onClickMenu}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner" />
                            </div>
                        </div> : null}
                </div>
                <ul className={`header-menu ${menuIsOpen ? "is-active" : ""}`}>
                    <li>
                        <ul>
                            <li><Link to="/events" onClick={this.onClickLink}>Events</Link></li>
                            <li><Link to="/bottles" onClick={this.onClickLink}>Scotch Library</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/login" onClick={(e) => {
                        this.props.scotchNightStore.clear();
                        auth.logout();
                        this.onClickMenu();
                    }}>Logout</Link></li>
                </ul>
            </nav>
        );
    }
}
