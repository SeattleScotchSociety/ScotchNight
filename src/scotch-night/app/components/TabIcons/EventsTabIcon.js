//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// create a component
class EventsTabIcon extends React.Component {
    render() {
        return <MaterialIcons name="event" size={20} color={this.props.tintColor} />;
    }
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default EventsTabIcon;
