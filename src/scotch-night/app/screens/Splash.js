import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import FadeInView from '../components/FadeInView';

export default class Splash extends Component {
    constructor(props) {
        super(props);

        this._startApp = this._startApp.bind(this);
    }

    componentDidMount() {
        setTimeout(this._startApp, 4000);
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
                    alignItems: 'center'
                }}>
                <Image style={styles.image} source={require('../../assets/main.jpg')}>
                    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                        <Text style={styles.headerText}>Seattle Scotch Society</Text>
                        <Text style={styles.headerText}>Presents</Text>
                        <Text style={styles.headerText}>Scotch Night</Text>
                    </View>
                </Image>
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
        backgroundColor: '#ecf0f1'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 36,
        fontWeight: '600'
    }
});
