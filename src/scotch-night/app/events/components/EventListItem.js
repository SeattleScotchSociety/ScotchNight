// @flow
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const EventListItem = (props: any) => {
    let { event, onPress } = props;

    let eventDate: string = `${event.date}`;

    return <View onPress={onPress}><Text>{eventDate}</Text></View>;
};

export default EventListItem;
