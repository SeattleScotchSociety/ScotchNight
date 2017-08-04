// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as moment from 'moment';
import _ from 'lodash';

import { bottleSelected } from '../../bottles/BottleActions';
import { loadReviews } from '../../reviews/ReviewActions';

function TastingMenu(props) {
    let { menu, onPress } = props;

    if (!menu || menu.length === 0) {
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
        let { bottleSelected, loadReviews } = this.props.actions;

        loadReviews(bottle.id);
        bottleSelected(bottle.id);

        navigate('Bottle', { bottle: bottle });
    }

    _handleOnAddBottle() {
        let { navigate } = this.props.navigation;
        navigate('AddBottle', { event: this.props.navigation.state.params });
    }

    render() {
        let { menu } = this.props;
        let { title, location, description, date } = this.props.event;

        return (
            <View style={styles.container}>
                <View style={styles.eventContainer}>
                    <Text style={styles.eventTitle}>{title}</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 15, marginBottom: 5 }}>
                        {
                            location ?
                                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                    <SimpleLineIcons name='location-pin' color='#80807f' size={16} />
                                    <Text style={styles.eventDetail}>{location}</Text>
                                </View> : null
                        }
                        <View style={{ flexDirection: 'row' }}>
                            <SimpleLineIcons name='calendar' color='#80807f' size={16} />
                            <Text style={styles.eventDetail}>{moment.default(date).format('dddd, MMMM, YYYY, h:mm')}</Text>
                        </View>
                    </View>
                    <Text style={styles.description}>{description}</Text>
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
        flexDirection: 'column'
    },
    eventTitle: {
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 5,
        color: '#00817d',
        fontWeight: 'bold',
        fontSize: 18
    },
    description: {
        marginBottom: 20,
        marginLeft: 15
    },
    eventDetail: {
        color: '#80807f',
        marginLeft: 5
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

function mapStateToProps(state) {
    let currentEvent = state.events.selected;
    let menu = [];

    if (currentEvent.bottles) {
        menu = _.filter(state.bottles.all, bottle => currentEvent.bottles.includes(bottle.id));
    }

    return { event: currentEvent, menu };
}

function mapDispatchToProps(dispatch) {
    let actions = { bottleSelected, loadReviews };

    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
