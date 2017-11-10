import { inject, observer } from "mobx-react";
import * as React from "react";

interface IModalProps {
    children: any;
    className: string;
};

interface IModalState {
    isOpen: boolean;
}

@observer
export class Modal extends React.Component<IModalProps, IModalState> {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.ignore = this.ignore.bind(this);

        this.state = {
            isOpen: false
        };
    }

    public open() {
        this.setState({ isOpen: true });

        if(document && document.body) {
            document.body.classList.add('modal__body');
        }
    }

    public close() {
        this.setState({ isOpen: false });

        if(document && document.body) {
            document.body.classList.remove('modal__body');
        }
    }

    private ignore(e) {
        e.stopPropagation();
    }

    public render() {
        const { className, children } = this.props;
        const { isOpen } = this.state;

        return (
            <div className={`modal ${className} ${isOpen ? 'open' : ''}`} onClick={this.close}>
                <div className="modal__content" onClick={this.ignore}>
                    {children}
                </div>
            </div>
        );
    }
}

export default Modal;
