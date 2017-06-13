//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class ReviewsTabIcon extends React.Component {
    render() {
        return <Ionicons name="ios-contacts-outline" size={20} color={this.props.tintColor} />;
    }
}

const styles = StyleSheet.create({});

export default ReviewsTabIcon;
