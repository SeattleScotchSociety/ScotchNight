// @flow
import React from 'react';
import { StyleSheet, Text, View, Image, SectionList, Button, ListItem } from 'react-native';
import { connect } from 'react-redux';
import { getAllEvents } from '../api/EventsApi';
import EventListItem from '../components/EventListItem';

class EventList extends React.Component {
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

    render() {
        let { past, upcoming, today, events } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={({item}) => <EventListItem {...item} onPress={() => navigate('EventDetail', item)} />}
                    renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
                    sections={[
                        { data: today, key: 'today', title: 'Today' },
                        { data: upcoming, key: 'upcoming', title: 'Upcoming' },
                        { data: past, key: 'past', title: 'Past' }
                    ]} />
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
    headerText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 24
    },
    header: {
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#00817d',
        color: '#fff',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    }
});
