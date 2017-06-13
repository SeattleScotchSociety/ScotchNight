//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// create a component
class NotesTabIcon extends React.Component {
    render() {
        return <MaterialCommunityIcons name="note-multiple" size={18} color={this.props.tintColor} />;
    }
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default NotesTabIcon;
