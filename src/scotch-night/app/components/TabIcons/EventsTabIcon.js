//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// create a component
class EventsTabIcon extends React.Component {
    render() {
        return <Ionicons name="ios-calendar-outline" size={30} color={this.props.tintColor} />;
    }
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default EventsTabIcon;
