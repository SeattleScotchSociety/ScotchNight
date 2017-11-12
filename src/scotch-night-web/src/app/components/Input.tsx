import { inject, observer } from "mobx-react";
import * as React from "react";

interface IInputProps {
    value: any;
    placeholder: string;
    type: string;
    onChange: any;
}

@observer
export class Input extends React.Component<IInputProps> {
    constructor(props) {
        super(props);
    }

    public render() {
        const { value, placeholder, type, onChange } = this.props;

        return (
            <div className={`input`}>
                <div className="input__placeholder">{value ? placeholder : " "}</div>
                <input placeholder={placeholder} type={type} value={value} className="input__field" onChange={onChange} />
            </div>
        );
    }
}

export default Input;
