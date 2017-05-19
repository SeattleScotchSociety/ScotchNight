import React, { Component } from 'react';
import { WebBrowser } from 'expo';
import { Button, Text, Image, View, StyleSheet, Animated, Easing, Linking } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Constants } from 'expo';
import Modal from 'react-native-root-modal';

export default class Splash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            xValue: new Animated.Value(1),
            yValue: new Animated.Value(0.9),
            modalVisible: false,
            modalOpacity: new Animated.Value(0)
        };

        this._handleOnPress = this._handleOnPress.bind(this);
        this._handleOnLogin = this._handleOnLogin.bind(this);
    }

    componentDidMount() {
        Animated.sequence([
            Animated.timing(this.state.xValue, {
                toValue: 0,
                duration: 1000,
                easing: Easing.linear
            }),
            Animated.timing(this.state.yValue, {
                toValue: 0,
                duration: 400,
                easing: Easing.linear
            })
        ]).start();
    }

    _handleOnLogin = () => {
        const { modalOpacity } = this.state;

        Animated.spring(modalOpacity, { toValue: 1 }).start();
        this.setState({ modalVisible: true });
    };
    _handleOnPress = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'MainApp' })]
        });

        this.props.navigation.dispatch(resetAction);
    };

    _handlePressSignIn = async () => {
        Linking.addEventListener('url', this._handleFacebookRedirect);
        let result = await WebBrowser.openBrowserAsync(FacebookAuthURI);
        console.log({ result });
        Linking.removeEventListener('url', this._handleFacebookRedirect);
    };

    _handleFacebookRedirect = async event => {
        WebBrowser.dismissBrowser();
        let token = event.url.split('/+redirect/?code=')[1];
        this.setState({ token, url: event.url });
    };

    render() {
        const { modalVisible, modalOpacity } = this.state;
        const rotateX = this.state.xValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg']
        });

        const rotateY = this.state.yValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg']
        });

        return (
            <View style={{ flex: 1 }}>
                <Modal
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    visible={modalVisible}>
                    <Animated.View
                        style={{
                            opacity: modalOpacity,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            ...StyleSheet.absoluteFillObject
                        }}
                    />
                    <Animated.View
                        style={{
                            opacity: modalOpacity,
                            width: 300,
                            height: 300,
                            backgroundColor: 'white',
                            borderRadius: 15,
                            padding: 30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{ marginBottom: 15 }}>
                            Do you want to autofill your contact info from Facebook?
                        </Text>
                        <Button
                            title={'Login to Facebook'}
                            onPress={() => this.setState({ modalVisible: false })}
                        />
                        <Text style={{ marginTop: 15 }}>No thanks!</Text>
                    </Animated.View>
                </Modal>
                <Animated.View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: this.state.enter,
                        transform: [{ rotateX }, { rotateY: rotateY }]
                    }}>
                    <Image style={styles.image} source={require('../../assets/scotch-hero.jpg')}>
                        <Text style={styles.headerText}>Seattle</Text>
                        <Text style={styles.headerText}>Scotch</Text>
                        <Text style={styles.headerText}>Society</Text>
                        <Button
                            onPress={this._handleOnPress}
                            style={{
                                width: 50,
                                height: 30
                            }}
                            title="Go To App"
                        />
                    </Image>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
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
