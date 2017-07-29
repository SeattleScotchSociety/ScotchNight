// @flow
import React, { Component } from 'react';
import {
    Button,
    ScrollView,
    View,
    KeyboardAvoidingView,
    Picker,
    TextInput,
    StyleSheet,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bottleActions from '../BottleActions';
import GrowingTextInput from '../../components/GrowingTextInput';

class AddBottle extends Component {
    static navigationOptions = {
        title: 'Add Bottle'
    };

    constructor(props) {
        super(props);

        this.state = {
            bottle: {
                distillery: '',
                name: '',
                age: '',
                description: ''
            }
        };

        this._handleOnAddPress = this._handleOnAddPress.bind(this);
        this._handleOnChange = this._handleOnChange.bind(this);
    }

    _handleOnChange = (property, value) => {
        let { bottle } = this.state;
        bottle[property] = value;

        this.setState({ bottle });
    };

    _handleOnAddPress = () => {
        let { addBottle } = this.props.actions;
        const { navigate } = this.props.navigation;
        let { bottle } = this.state;

        addBottle(bottle);
        navigate('EventList', {});
    };

    render() {
        let { bottle } = this.state;
        let { members } = this.props;

        return (
            <View>
                <KeyboardAvoidingView behavior="padding" style={{ paddingVertical: 20 }}>
                    <View style={[styles.row, styles.firstRow]}>
                        <TextInput
                            ref={view => {
                                this.distillery = view;
                            }}
                            value={bottle.distillery}
                            placeholder="Distillery"
                            onChangeText={this._handleOnChange.bind(this, 'distillery')}
                            style={styles.textInput}
                            autoCapitalize="words"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onSubmitEditing={async () => {
                                this._locationInput.focus();
                            }} />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            ref={view => {
                                this.name = view;
                            }}
                            value={bottle.name}
                            placeholder="Name"
                            onChangeText={this._handleOnChange.bind(this, 'name')}
                            style={styles.textInput}
                            autoCapitalize="words"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next" />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            ref={view => {
                                this.name = view;
                            }}
                            value={bottle.age}
                            placeholder="Age"
                            onChangeText={this._handleOnChange.bind(this, 'age')}
                            style={styles.textInput}
                            autoCapitalize="words"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next" />
                    </View>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="padding" style={{ paddingVertical: 20 }}>
                    <View style={styles.row}>
                        <GrowingTextInput
                            placeholder='Description'
                            ref={view => { this._descriptionInput = view; }}
                            minHeight={60}
                            value={bottle.description}
                            onChangeText={this._handleOnChange.bind(this, 'description')}
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            style={styles.textInput} />
                    </View>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="padding" style={{ paddingVertical: 20 }}>
                    <Button title="Add Bottle" onPress={this._handleOnAddPress} color="#009688" />
                </KeyboardAvoidingView>
                <StatusBar barStyle="light-content" />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(bottleActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBottle);

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    },
    row: {
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },
    label: {
        marginLeft: 15,
        fontSize: 16
    },
    firstRow: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc'
    },
    textInput: {
        flex: 1,
        height: 45,
        paddingHorizontal: 15,
        fontSize: 16
    },
    growingTextInput: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 16
    }
});
