// @flow
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const EventDetail = (props: any) => {
    let { title, location, description, date, menu } = props.navigation.state.params;

    return (
        <View style={styles.container}>
            <View style={styles.eventContainer}>
                <View style={styles.eventDetailContainer}>
                    <Text style={styles.distillery}>{date}</Text>
                    <Text style={styles.eventName}>{location}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.description}>{title}</Text>
                </View>
            </View>
            <Text>Tasting Menu</Text>
            <FlatList
                data={menu}
                renderItem={({item}) => <ListItem title={`${item.distillery} ${item.name}`} />} />
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
