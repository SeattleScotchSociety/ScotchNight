// @flow
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventDetail = (props: any) => {
    let { event } = props.navigation.state.params;

    return (
        <View style={styles.container}>
            <View style={styles.eventContainer}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{
                        uri: event.eventImageUrl
                    }}
                />
                <View style={styles.eventDetailContainer}>
                    <Text style={styles.distillery}>{event.date}</Text>
                    <Text style={styles.eventName}>{event.location}</Text>
                    <Text style={styles.description}>{event.description}</Text>
                </View>
            </View>
        </View>
    );
};

const PROVIDER_IMAGE_SIZE = 40;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    eventContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    eventDetailContainer: {
        marginLeft: 20
    },
    distillery: {
        fontSize: 24,
        fontWeight: '500'
    },
    eventName: {
        fontSize: 18,
        marginBottom: 12
    },
    description: {
        fontSize: 14
    },
    providerContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    providerImage: {
        width: PROVIDER_IMAGE_SIZE,
        height: PROVIDER_IMAGE_SIZE,
        borderRadius: PROVIDER_IMAGE_SIZE / 2,
        marginRight: 10
    },
    providerDetailsContainer: {
        justifyContent: 'center'
    },
    providerName: {
        color: 'purple',
        fontSize: 18,
        fontWeight: '500'
    },
    meetingDate: {
        fontSize: 13
    }
});
export default EventDetail;
