// @flow
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BottleDetail = (props: any) => {
    let { bottle } = props.navigation.state.params;

    return (
        <View style={styles.container}>
            <View style={styles.bottleContainer}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{
                        uri: bottle.bottleImageUrl
                    }}
                />
                <View style={styles.bottleDetailContainer}>
                    <Text style={styles.distillery}>{bottle.distillery}</Text>
                    <Text style={styles.bottleName}>{bottle.name}</Text>
                    <Text style={styles.description}>{bottle.description}</Text>
                </View>
            </View>
            <View style={styles.providerContainer}>
                <Image
                    style={styles.providerImage}
                    source={{
                        uri: 'http://www.westlanddistillery.com/assets/media/whiskeys/5e4a5c3c6cdbfabdcf67941c83f9e7d9.jpg'
                    }}
                />
                <View style={styles.providerDetailsContainer}>
                    <Text style={styles.providerName}>Adam Phillabaum</Text>
                    <Text style={styles.meetingDate}>June 12, 2017</Text>
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
    bottleContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    bottleDetailContainer: {
        marginLeft: 20
    },
    distillery: {
        fontSize: 24,
        fontWeight: '500'
    },
    bottleName: {
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
export default BottleDetail;
