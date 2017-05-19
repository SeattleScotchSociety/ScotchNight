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
import * as bottleActions from '../BottlesActions';
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
                description: '',
                bottleUrl: '',
                distilleryUrl: '',
                bottleImageUrl: '',
                member: ''
            }
        };

        this._handleOnAddPress = this._handleOnAddPress.bind(this);
    }

    _handleTextChange = (property, value) => {
        let { bottle } = this.state;

        bottle[property] = value;

        this.setState({ bottle });
    };

    _handleOnAddPress = () => {
        let { addBottle } = this.props.actions;
        const { navigate } = this.props.navigation;
        let { bottle } = this.state;

        addBottle(bottle);
        navigate('BottleList', {});
    };

    render() {
        let { bottle } = this.state;

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
                            value={bottle.distillery}
                            placeholder="Distillery"
                            onChangeText={this._handleTextChange.bind(this, 'distillery')}
                            style={styles.textInput}
                            autoCapitalize="words"
                            autoCorrect={false}
                            autoFocus={true}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onSubmitEditing={async () => {
                                this._nameInput.focus();
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            ref={view => {
                                this._nameInput = view;
                            }}
                            value={bottle.name}
                            placeholder="Name"
                            onChangeText={this._handleTextChange.bind(this, 'name')}
                            style={styles.textInput}
                            autoCapitalize="words"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onSubmitEditing={async () => {
                                this._memberInput.focus();
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            ref={view => {
                                this._memberInput = view;
                            }}
                            value={bottle.member}
                            placeholder="Member Username"
                            onChangeText={this._handleTextChange.bind(this, 'member')}
                            style={styles.textInput}
                            autoCapitalize="none"
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
                            value={bottle.description}
                            placeholder="Description"
                            onChangeText={this._handleTextChange.bind(this, 'description')}
                            style={styles.growingTextInput}
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onSubmitEditing={async () => {
                                this._bottleUrlInput.focus();
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            ref={view => {
                                this._bottleUrlInput = view;
                            }}
                            value={bottle.bottleUrl}
                            placeholder="Bottle Url"
                            onChangeText={this._handleTextChange.bind(this, 'bottleUrl')}
                            style={styles.textInput}
                            autoCapitalize="none"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onSubmitEditing={async () => {
                                this._distilleryUrlInput.focus();
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            ref={view => {
                                this._distilleryUrlInput = view;
                            }}
                            value={bottle.distilleryUrl}
                            placeholder="Distillery Url"
                            onChangeText={this._handleTextChange.bind(this, 'distilleryUrl')}
                            style={styles.textInput}
                            autoCapitalize="none"
                            autoCorrect={false}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onSubmitEditing={async () => {
                                this._bottleImageUrlInput.focus();
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            ref={view => {
                                this._bottleImageUrlInput = view;
                            }}
                            value={bottle.bottleImageUrl}
                            placeholder="Bottle Image Url"
                            onChangeText={this._handleTextChange.bind(this, 'bottleImageUrl')}
                            style={styles.textInput}
                            autoCapitalize="none"
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
