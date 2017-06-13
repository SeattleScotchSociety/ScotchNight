// @flow
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import { getAllEvents } from '../api/EventsApi';
import EventListItem from '../components/EventListItem';

class EventList extends React.Component {
    static navigationOptions = {
        title: 'Events'
    };

    constructor(props) {
        super(props);
        const events = getAllEvents();
        this.state = {
            events
        };
    }

    componentWillMount() {
        const events = getAllEvents();

        this.setState({
            events
        });
    }

    _handleOnPress() {

    }

    _renderItem = ({ item }) => {
        return (
            <EventListItem
                event={item}
                onPress={() => navigate('EventDetail', { event: { ...item } })}
            />
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.events}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
                <Button title="Add New Event" color="#607D8B" onPress={this._handleOnPress} />
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
    }
});
