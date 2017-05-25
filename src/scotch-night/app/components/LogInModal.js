import React from 'react';
import { Text, StyleSheet, Button, Animated, Alert } from 'react-native';
import Modal from 'react-native-root-modal';
import Exponent from 'expo';

export default class LogInModal extends React.Component {
    async logIn() {
        const {
            type,
            token
        } = await Exponent.Facebook.logInWithReadPermissionsAsync('284544882006268', {
            permissions: ['public_profile'],
            behavior: 'web'
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
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
                        Do you want to autofill your contact info from Facebook?
                    </Text>
                    <Button title={'Login to Facebook'} onPress={() => this.logIn()} />
                    <Text style={{ marginTop: 15 }}>No thanks!</Text>
                </Animated.View>
            </Modal>
        );
    }
}
