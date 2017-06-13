//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

// create a component
class AddTabIcons extends React.Component {
    render() {
        return <SimpleLineIcons name="plus" size={45} color='#fff' />;
    }
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default AddTabIcons;
