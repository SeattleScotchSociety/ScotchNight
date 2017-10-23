import { observer } from "mobx-react";
import * as React from "react";
import { Button } from "reactstrap";

import Auth from "../services/Auth";
import { IScotchNightStore } from "../stores/ScotchNightStore";

interface ILoginProps { auth: Auth; }

export const Login = (props: ILoginProps) => {
    const { auth } = props;

    return (<div>
        <h1>Scotch Night</h1>
        <img src="/src/app/images/whiskey-image.jpg" />
        <Button onClick={() => auth.login()}>Log In</Button>
    </div>);
};