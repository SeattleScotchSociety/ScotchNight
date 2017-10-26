import { observer } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";

import Auth from "../services/Auth";
import { IScotchNightStore } from "../stores/ScotchNightStore";

interface IHeaderProps { scotchNightStore: IScotchNightStore; auth: any; }

export const Header = observer((props: IHeaderProps) => {
    const { auth } = props;
    const { currentUser } = props.scotchNightStore;

    let logInLink = (<a
        className="nav-link"
        href="/"
        onClick={(e) => {
            e.preventDefault();
            auth.login();
        }}
    >
        Log In
    </a>);

    if (currentUser) {
        logInLink = (<Link
            className="nav-link"
            to="/login"
            onClick={(e) => {
                auth.logout();
            }}
        >
            Log Out
        </Link>);
    }

    return (<header className="navbar navbar-expand-sm">
        <a className="navbar-brand" href="#">Scotch Night</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    {logInLink}
                </li>
            </ul>
        </div>
    </header>);
});