import { observer } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";

import Auth from "../services/Auth";
import { IScotchNightStore } from "../stores/ScotchNightStore";

interface IHeaderProps { scotchNightStore: IScotchNightStore; auth: any; }
interface IHeaderState { menuIsOpen: boolean; }

@observer
export class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props) {
        super(props);

        this.onClickMenu = this.onClickMenu.bind(this);
        this.onClickLink = this.onClickLink.bind(this);

        this.state = {
            menuIsOpen: false
        }
    }

    onClickMenu() {
        const { menuIsOpen } = this.state;
        this.setState({ menuIsOpen: !menuIsOpen });
    }

    onClickLink() {
        this.setState({ menuIsOpen: false });
    }

    render() {
        const { auth } = this.props;
        const { menuIsOpen } = this.state;
        const { currentUser } = this.props.scotchNightStore;

        return (
            <nav>
                <div className="header">
                    <span>Scotch Night</span>
                    { currentUser ?
                        <div className={`hamburger hamburger--squeeze ${menuIsOpen ? 'is-active' : ''}`} onClick={this.onClickMenu}>
                          <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                          </div>
                        </div> : null }
                </div>
                <ul className={`header-menu ${menuIsOpen ? 'is-active' : ''}`}>
                    <li>
                        <ul>
                            <li><Link to="/events" onClick={this.onClickLink}>Events</Link></li>
                            <li><Link to="/bottles" onClick={this.onClickLink}>Scotch Library</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/login" onClick={(e) => { auth.logout(); }}>Logout</Link></li>
                </ul>
            </nav>
        );
    }
}
