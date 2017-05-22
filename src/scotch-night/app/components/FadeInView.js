import React, { Component } from 'react';
import { Animated } from 'react-native';

class FadeInView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: new Animated.Value(0)
        };
    }

    componentDidMount() {
        const { opacity } = this.state;
        const { onFadeComplete, duration = 500 } = this.props;

        Animated.timing(opacity, {
            toValue: 1,
            duration
        }).start(onFadeComplete || (() => {}));
    }

    render() {
        const { opacity } = this.state;
        const { style } = this.props;

        return (
            <Animated.View style={[{ opacity }].concat(style || [])}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export default FadeInView;
