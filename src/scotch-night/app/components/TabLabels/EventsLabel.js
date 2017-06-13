//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class EventsLabel extends React.Component {
    render() {
        return <Text style={{textAlign: 'center', color: this.props.tintColor}}>Events</Text>;
    }
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default EventsLabel;
