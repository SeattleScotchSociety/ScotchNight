// @flow
import React, { Component } from 'react';
import {
    Button,
    ScrollView,
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../EventActions';
import GrowingTextInput from '../../components/GrowingTextInput';

class AddEvent extends Component {
    static navigationOptions = {
        title: 'Add Event'
    };

    constructor(props) {
        super(props);

        this.state = {
            event: {
                id: '',
                date: '',
                location: '',
                description: ''
            }
        };

        this._handleOnAddPress = this._handleOnAddPress.bind(this);
    }

    _handleTextChange = (property, value) => {
        let { event } = this.state;

        event[property] = value;

        this.setState({ event });
    };

    _handleOnAddPress = () => {
        let { addEvent } = this.props.actions;
        const { navigate } = this.props.navigation;
        let { event } = this.state;

        addEvent(event);
        navigate('EventList', {});
    };

    render() {
        let { event } = this.state;

        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingHorizontal: 20,
                    paddingTop: 20
                }}>
                <ScrollView
                    style={{ flex: 1, backgroundColor: '#F8F8F9' }}
                    contentContainerStyle={{ paddingTop: 30 }}>

                    <View style={[styles.row, styles.firstRow]}>
                        <TextInput
                            value={event.date}
                            placeholder="Date"
                            onChangeText={this._handleTextChange.bind(this, 'date')}
                            style={styles.textInput}
                            autoCapitalize="words"
                            autoCorrect={false}
                            autoFocus={true}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onSubmitEditing={async () => {
                                this._locationInput.focus();
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            ref={view => {
                                this._locationInput = view;
                            }}
                            value={event.location}
                            placeholder="Location"
                            onChangeText={this._handleTextChange.bind(this, 'location')}
                            style={styles.textInput}
                            autoCapitalize="words"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onSubmitEditing={async () => {
                                this._descriptionInput.focus();
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <GrowingTextInput
                            ref={view => {
                                this._descriptionInput = view;
                            }}
                            minHeight={80}
                            value={event.description}
                            placeholder="Description"
                            onChangeText={this._handleTextChange.bind(this, 'description')}
                            style={styles.growingTextInput}
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            blurOnSubmit={false}
                        />
                    </View>
                    <Button
                        title="Save"
                        onPress={this._handleOnAddPress}
                        style={{
                            backgroundColor: 'maroon'
                        }}
                    />
                </ScrollView>

                <StatusBar barStyle="light-content" />
            </KeyboardAvoidingView>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(eventActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);

const styles = StyleSheet.create({
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
