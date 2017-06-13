//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// create a component
class Add extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center'}}>
                <View style={styles.addButtonWrapper}>
                    <View style={styles.addButton}>
                        <MaterialCommunityIcons name="calendar-plus" size={30} color="#009688" style={styles.buttonIcon} />
                    </View>
                    <Text style={styles.addButtonText}>Create Event</Text>
                </View>
                <View style={styles.addCenterButtonWrapper}>
                    <View style={styles.addCenterButton}>
                        <MaterialCommunityIcons name="note-plus-outline" size={30} color="#009688" style={styles.buttonIcon} />
                    </View>
                    <Text style={styles.addButtonText}>Add Note</Text>
                </View>
                <View style={styles.addButtonWrapper}>
                    <View style={styles.addButton}>
                        <MaterialCommunityIcons name="calendar-check" size={30} color="#009688" style={styles.buttonIcon} />
                    </View>
                    <Text style={styles.addButtonText}>Join Event</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    addCenterButtonWrapper: {
        marginBottom: 80
    },
    addCenterButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: '#009688',
        borderWidth: 4,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonWrapper: {
        marginBottom: 40
    },
    addButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: '#009688',
        borderWidth: 4,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        textAlign: 'center',
        color: '#009688',
        fontSize: 12
    }
});

//make this component available to the app
export default Add;
