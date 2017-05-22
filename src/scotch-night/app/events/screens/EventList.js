// @flow
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAllEvents } from '../api/EventsApi';
import EventListItem from '../components/EventListItem';

class EventList extends React.Component {
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
                <Image style={styles.image} source={require('../../../assets/scotch-hero.jpg')}>
                    <Text style={styles.headerText}>Seattle</Text>
                    <Text style={styles.headerText}>Scotch</Text>
                    <Text style={styles.headerText}>Society</Text>
                </Image>
                <FlatList
                    data={this.state.events}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
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
    image: {
        height: 250,
        width: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 24
    }
});
