// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    ScrollView,
    View,
    Picker,
    TextInput,
    Text,
    Slider,
    StyleSheet,
    StatusBar
} from 'react-native';
import { Constants } from 'expo';
import * as reviewActions from '../ReviewActions';
import GrowingTextInput from '../../components/GrowingTextInput';

export class AddReview extends Component {
    static navigationOptions = {
        title: 'Review'
    };

    constructor(props) {
        super(props);

        this.state = {
            review: {
                bottleId: '',
                member: '',
                rating: '',
                notes: ''
            }
        };

        this._handleOnAddPress = this._handleOnAddPress.bind(this);
    }

    _handleTextChange = (property, value) => {
        let { review } = this.state;

        review[property] = value;

        this.setState({ review });
    };

    _handleOnAddPress = () => {
        let { addReview } = this.props.actions;
        const { navigate } = this.props.navigation;
        let { review } = this.state;

        addReview(review);
        navigate('BottleList', {});
    };

    _renderBottleItem(bottle) {
        return (
            <Picker.Item
                key={bottle.id}
                label={`${bottle.distillery} ${bottle.name}`}
                value={bottle.id}
            />
        );
    }

    render() {
        let { bottles } = this.props;
        let { review } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={{ flex: 1, backgroundColor: '#F8F8F9' }}
                    contentContainerStyle={{ paddingTop: 65 + 30 }}>
                    <Picker
                        selectedValue={review.bottleId}
                        onValueChange={id => this._handleTextChange('bottleId', id)}>
                        {bottles.map(bottle => this._renderBottleItem(bottle))}
                    </Picker>
                    <View style={[styles.row, styles.firstRow]}>
                        <TextInput
                            value={this.state.inputValue}
                            onChangeText={this._handleTextChange}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            value={this.state.inputValue}
                            onChangeText={this._handleTextChange}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            value={this.state.inputValue}
                            onChangeText={this._handleTextChange}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.row}>
                        <GrowingTextInput
                            minHeight={80}
                            value={this.state.inputValue}
                            onChangeText={this._handleTextChange}
                            style={styles.growingTextInput}
                        />
                    </View>
                    <Slider minimumValue={0} maximumValue={5} step={1} />
                </ScrollView>

                <View style={styles.navbar}>
                    <Text style={styles.headerText}>Review</Text>
                </View>

                <StatusBar barStyle="light-content" />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(reviewActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 65,
        backgroundColor: '#050B7A',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
    },
    headerText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    },
    row: {
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc'
    },
    firstRow: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc'
    },
    textInput: {
        flex: 1,
        height: 45,
        paddingHorizontal: 15
    },
    growingTextInput: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 15
    }
});
