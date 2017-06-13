import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import FadeInView from '../components/FadeInView';
import TypeWriter from 'react-native-typewriter';

export default class Splash extends Component {
    constructor(props) {
        super(props);

        this._startApp = this._startApp.bind(this);
    }

    componentDidMount() {
        setTimeout(this._startApp, 1000);
    }

    _startApp = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'MainApp' })]
        });

        this.props.navigation.dispatch(resetAction);
    };

    render() {
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
