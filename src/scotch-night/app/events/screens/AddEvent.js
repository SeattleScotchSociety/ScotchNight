// @flow
import React, { Component } from 'react';
import {
    Button,
    ScrollView,
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    StatusBar,
    Switch,
    Text
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../EventActions';
import GrowingTextInput from '../../components/GrowingTextInput';
import { MaterialIcons } from '@expo/vector-icons';

class AddEvent extends Component {
    static navigationOptions = {
        title: 'New Event'
    };

    constructor(props) {
        super(props);

        this.state = {
            event: {
                id: '',
                date: new Date(),
                location: '',
                description: ''
            }
        };

        this._handleOnAddPress = this._handleOnAddPress.bind(this);
        this._handleOnChange = this._handleOnChange.bind(this);
    }

    _handleOnChange = (property, value) => {
        let { event } = this.state;
        let newEvent = {...event};

        newEvent[property] = value;
        this.setState({ event: newEvent });
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
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let yearFromToday = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());

        return (
            <View>
                <KeyboardAvoidingView behavior="padding" style={{ paddingVertical: 20 }}>
                    <View style={[styles.row, styles.firstRow]}>
                        <TextInput
                            ref={view => {
                                this._titleInput = view;
                            }}
                            value={event.title}
                            placeholder="Title"
                            onChangeText={this._handleOnChange.bind(this, 'title')}
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
                                this._locationInput = view;
                            }}
                            value={event.location}
                            placeholder="Location"
                            onChangeText={this._handleOnChange.bind(this, 'location')}
                            style={styles.textInput}
                            autoCapitalize="words"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next" />
                    </View>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="padding" style={{ paddingVertical: 20 }}>
                    <View style={[styles.row, styles.firstRow]}>
                        <Text style={styles.label}>Date</Text>
                        <DatePicker
                            style={{width: 180}}
                            date={event.date}
                            mode="datetime"
                            format="MMMM Do YYYY  h:mm a"
                            minDate={today}
                            maxDate={yearFromToday}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateInput: {
                                    borderWidth: 0
                                }
                            }}
                            showIcon={false}
                            onDateChange={this._handleOnChange.bind(this, 'date')} />
                    </View>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="padding" style={{ paddingVertical: 20 }}>
                    <View style={styles.row}>
                        <GrowingTextInput
                            placeholder='Description'
                            ref={view => { this._descriptionInput = view; }}
                            minHeight={60}
                            value={event.description}
                            onChangeText={this._handleOnChange.bind(this, 'description')}
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            style={styles.textInput} />
                    </View>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="padding" style={{ paddingVertical: 20 }}>
                    <Button title="Create New Event" onPress={this._handleOnAddPress} color="#009688" />
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
