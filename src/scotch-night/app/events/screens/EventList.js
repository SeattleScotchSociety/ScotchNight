// @flow
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { getAllEvents } from '../api/EventsApi';
import { SimpleLineIcons } from '@expo/vector-icons';
import EventListItem from '../components/EventListItem';

function EventSubList(props) {
    let { list, onPress } = props;

    if(list.length === 0) {
        return (
            <Text style={styles.noEvents}>No Events</Text>
        );
    }

    return (
        <List>
            {
                list.map((l, i) => (
                    <ListItem
                        key={i}
                        title={
                            <View style={{ flexDirection: 'row', margin: 5 }}>
                                <View><Text style={{ fontSize: 13 }}>{l.date}</Text></View>
                                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                    <View><Text style={{ fontSize: 15 }}>{l.title}</Text></View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <SimpleLineIcons name='location-pin' size={16} color='#80807f' />
                                        <Text style={{ color: '#80807f' }}> {l.location}</Text>
                                    </View>
                                </View>
                            </View>
                        }
                        onPress={onPress.bind(null, l)} />
                ))
            }
        </List>
    );
}

class EventList extends React.Component {
    static navigationOptions = {
        title: 'Events'
    };

    constructor(props) {
        super(props);
        const events = getAllEvents();
        let past = [];
        let upcoming = [];
        let today = [];
        let now = new Date();

        events.forEach((event) => {
            let date = new Date(event.date);

            if(date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear() && date.getDate() === now.getDate()) {
                today.push(event);
            }
            else if(date < now) {
                past.push(event);
            }
            else {
                upcoming.push(event);
            }
        });

        this._handleOnPress = this._handleOnPress.bind(this);

        this.state = {
            events,
            past,
            upcoming,
            today
        };
    }

    componentWillMount() {
        const events = getAllEvents();

        this.setState({
            events
        });
    }

    _handleOnPress(e) {
        let { navigate } = this.props.navigation;
        navigate('EventDetail', e);
    }

    _handleOnAddEvent() {

    }

    render() {
        let { past, upcoming, today, events } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Today</Text>
                <EventSubList list={today} onPress={this._handleOnPress} />
                <Text style={styles.headerText}>Upcoming</Text>
                <EventSubList list={upcoming} onPress={this._handleOnPress} />
                <Text style={styles.headerText}>Past</Text>
                <EventSubList list={past} onPress={this._handleOnPress} />
                <Button style={{ marginTop: 20 }} title="Add New Event" backgroundColor='#00817d' onPress={this._handleOnAddEvent} />
            </View>
        );
    }
}

function mapStateToProps() {
    return { events: [] };
}

export default connect(mapStateToProps)(EventList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    location: {
        flexDirection: 'row',
        margin: 5
    },
    headerText: {
        color: '#00817d',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: -10,
        marginLeft: 15
    },
    noEvents: {
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 20,
        color: '#80807f'
    }
});
