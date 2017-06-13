// @flow
import React from 'react';
import { StyleSheet, Button, View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBottles } from '../api/BottlesApi';
import { loadBottles } from '../BottleActions';
import BottleListItem from '../components/BottleListItem';

class BottleList extends React.Component {
    static navigationOptions = {
        title: 'Bottles'
    };

    componentWillMount() {
        let { loadBottles } = this.props.actions;

        loadBottles();
    }

    renderFooter = () => {
        if (!this.props.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: '#CED0CE'
                }}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    _onAddPress() {
        const { navigate } = this.props.navigation;

        navigate('AddBottle', {});
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
              <FlatList
                  data={this.props.bottles || []}
                  renderItem={({ item }) => (
                      <BottleListItem
                          bottle={{ ...item }}
                          onPress={() => navigate('BottleDetail', { bottle: { ...item } })}
                      />
                  )}
                  keyExtractor={item => item.id}
                  ListHeaderComponent={this.renderHeader}
                  ListFooterComponent={this.renderFooter}
              />
              <Button title="Add Bottle" onPress={this._onAddPress.bind(this)} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    let { bottles } = state;

    return { bottles };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ loadBottles }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BottleList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
