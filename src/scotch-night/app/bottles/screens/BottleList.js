// @flow
import React from 'react';
import { StyleSheet, Button, View, FlatList, ActivityIndicator, Animated } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBottles } from '../BottleActions';
import BottleListItem from '../components/BottleListItem';
import LogInModal from '../../components/LogInModal';

class BottleList extends React.Component {
    static navigationOptions = {
        title: 'Bottles'
    };

    state = {
        modalVisible: true,
        modalOpacity: new Animated.Value(0)
    };

    componentWillMount() {
        let { loadBottles } = this.props.actions;
        let { modalOpacity } = this.state;

        loadBottles();

        Animated.spring(modalOpacity, { toValue: 1 }).start();
        this.setState({ modalVisible: true });
    }

    renderHeader = () => {
        return (
            <View style={{ flex: 1 }}>
                <Button title="Add Bottle" onPress={this._onAddPress.bind(this)} />
            </View>
        );
    };

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
        const { modalVisible, modalOpacity } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <LogInModal modalVisible={modalVisible} modalOpacity={modalOpacity} />
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
