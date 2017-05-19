//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// create a component
class BottlesTabIcon extends React.Component {
    render() {
        return <Ionicons name="ios-beer-outline" size={30} color={this.props.tintColor} />;
    }
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default BottlesTabIcon;
