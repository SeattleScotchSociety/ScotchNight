//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class BottlesLabel extends React.Component {
    render() {
        return <Text style={{textAlign: 'center', color: this.props.tintColor}}>Drink</Text>;
    }
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default BottlesLabel;
