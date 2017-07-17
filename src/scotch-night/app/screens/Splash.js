import React, { Component } from 'react';
import { Animated, View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import FadeInView from '../components/FadeInView';
import TypeWriter from 'react-native-typewriter';

import User from '../user';
let { userLoggedIn } = User.Actions;
let { isUserLoggedIn } = User.Selectors;

class Splash extends Component {
    constructor(props) {
        super(props);

        this._validateUserToken = this._validateUserToken.bind(this);
        this._showLogin = this._showLogin.bind(this);
        this._loginUser = this._loginUser.bind(this);
        this._startApp = this._startApp.bind(this);
    }

    state = {
        modalVisible: true,
        modalOpacity: new Animated.Value(0)
    };

    componentDidMount() {
        setTimeout(this._startApp, 1000);
    }

    _validateUserToken = () => {
        const { isLoggedIn } = this.props;

        if (isLoggedIn) {
            this._startApp();

            return;
        }

        this._showLogin();
    };

    _showLogin = () => {
        let { modalOpacity } = this.state;

        Animated.spring(modalOpacity, { toValue: 1 }).start();
        this.setState({ modalVisible: true });
    }

    _loginUser = (token, email, firstName, lastName) => {
        let { userLoggedIn } = this.props.actions;

        userLoggedIn(token, email, firstName, lastName);
        this._startApp();
    };

    _startApp = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'MainApp' })]
        });

        this.props.navigation.dispatch(resetAction);
    };

    render() {
        const { modalVisible, modalOpacity } = this.state;

        return (
            <FadeInView
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff'
                }}>
                <Image style={styles.image} source={require('../../assets/logo-500.png')}></Image>
            </FadeInView>
        );
    }
}

function mapStateToProps(state) {
    let isLoggedIn = isUserLoggedIn(state);

    return { ...state, isLoggedIn };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ userLoggedIn }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#fff'
    },
    image: {
      width: 250,
      height: 230
    },
    titleText: {
      marginTop: 10,
      fontSize: 50
    }
});
