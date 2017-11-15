import { observer } from "mobx-react";
import * as React from "react";

import Auth from "../services/Auth";
import { IScotchNightStore } from "../stores/ScotchNightStore";

interface ILoginProps { auth: Auth; }

export const Login = (props: ILoginProps) => {
    const { auth } = props;

    return (
        <div className="hero">
            <header>
                <span className="headerline1">Seattle Scotch Society</span>
                <span className="headerline2">presents</span>
                <span className="headerline3">Scotch Night</span>
            </header>
            <button className="btn btn--primary" onClick={() => auth.login()}>Start Tasting</button>
        </div>
    );
};
