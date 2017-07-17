import React from 'react';
import { Text, StyleSheet, Button, Animated, Alert } from 'react-native';
import Modal from 'react-native-root-modal';
import Exponent from 'expo';

export default class LogInModal extends React.Component {
    constructor(props) {
        super(props);

        this._logIn = this._logIn.bind(this);
    }

    async _logIn() {
        const { loggedInCallback } = this.props;

        const {
            type,
            token
        } = await Exponent.Facebook.logInWithReadPermissionsAsync('284544882006268', {
                permissions: ['public_profile', 'email'],
                behavior: 'web'
            });
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,first_name,last_name`);

            let { email, first_name: firstName, last_name: lastName } = response.json();

            Alert.alert('Logged in!', `Hi ${firstName} ${lastName}!`);
            Alert.alert('Logged in!', `Hi ${JSON.stringify(response.json())}!`);

            loggedInCallback(token, email, firstName, lastName);
        }
    }

    render() {
        const { modalVisible, modalOpacity } = this.props;

        return (
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
                        It appears you're not logged in.
                    </Text>
                    <Button title={'Login to Facebook'} onPress={() => this._logIn()} />
                    <Button
                        title={`Continue without logging in (you won't be able to save)`}
                        onPress={() => this._continue()}
                    />
                </Animated.View>
            </Modal>
        );
    }
}
