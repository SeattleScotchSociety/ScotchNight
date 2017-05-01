// @flow
import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { List, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import BottleListItem from '../components/bottleListItem';

class BottlesOverview extends React.Component {
    static navigationOptions = {
        title: 'All the Bottles'
    };

    constructor(props) {
        super(props);

        this.state = {
            bottles: []
        };
    }

    componentWillMount() {
        fetch('http://seattlescotchsocietyscotchnightapi20170429083006.azurewebsites.net/api/bottles', {
            Accept: 'application/json'
        })
            .then(response => response.json())
            .then(bottles => {
                if (!bottles) {
                    return;
                }

                this.setState({ bottles });
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: '#CED0CE'
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <List
                style={{
                    marginVertical: 0
                }}
            >
                <FlatList
                    data={this.state.bottles}
                    renderItem={({ item }) => <BottleListItem bottle={{ ...item }} onPress={() => navigate('BottleDetail', { bottle: { ...item } })} />}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
            </List>
        );
    }
}

function mapStateToProps() {
    return { bottles: [] };
}

export default connect(mapStateToProps)(BottlesOverview);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
