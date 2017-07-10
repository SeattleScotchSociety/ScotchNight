// @flow
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';

function TastingMenu(props) {
    let { menu, onPress } = props;

    if(!menu || menu.length === 0) {
        return (<Text style={styles.noBottles}>No Bottles</Text>);
    }

    let menuList = menu.map((item, index) => {
        return (
            <ListItem key={index} title={`${item.distillery} ${item.name}`} onPress={onPress.bind(null, item)} />
        );
    });

    return (
        <List>{menuList}</List>
    );
}

class EventDetail extends Component {
    constructor(props) {
        super(props);

        this._handleOnPress = this._handleOnPress.bind(this);
        this._handleOnAddBottle = this._handleOnAddBottle.bind(this);
    }

    _handleOnPress(bottle) {
        let { navigate } = this.props.navigation;
        navigate('Bottle', { bottle: bottle });
    }

    _handleOnAddBottle() {

    }

    render() {
        let { title, location, description, date, menu } = this.props.navigation.state.params;

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
                <Text style={styles.menuHeader}>Tasting Menu</Text>
                <TastingMenu menu={menu} onPress={this._handleOnPress} />
                <Button title='Add Bottle' backgroundColor='#00817d' style={{ marginTop: 20 }} onPress={this._handleOnAddBottle} />
            </View>
        );
    }
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
    eventName: {
        fontSize: 18,
        marginBottom: 12
    },
    description: {
        fontSize: 14
    },
    meetingDate: {
        fontSize: 13
    },
    menuHeader: {
        color: '#00817d',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: -10,
        marginLeft: 15
    },
    noBottles: {
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 20,
        color: '#80807f'
    }
});
export default EventDetail;
