// @flow
import React, { Component } from 'react';
import Expo from 'expo';
import { Provider } from 'react-redux';
import Store from './app/Store';

import ScotchNight from './app/ScotchNight';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            isReady: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            Ionicons: require('native-base/Fonts/Ionicons.ttf')
        });

        this.setState({ isReady: true });
    }

    render() {
        return <Provider store={Store}><ScotchNight /></Provider>;
    }
}
