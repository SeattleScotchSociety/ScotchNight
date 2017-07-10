import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../MemberActions';

class SetMember extends Component {
    constructor(props) {
        super(props);

        this._handleTextChange = this._handleTextChange.bind(this);
        this._handleOnPress = this._handleOnPress.bind(this);
    }

    _handleTextChange(member) {
        this.props.actions.setMember(member);
    }

    _handleOnPress() {
        const { navigate } = this.props.navigation;
        navigate('Events', {});
    }

    render() {
        let { members } = this.props;

        let memberItems = members.members.map((member) => {
            return (
                <Picker.Item
                    key={member.username}
                    label={`${member.firstName} ${member.lastName}`}
                    value={member.username} />
            );
        })

        return (
            <View>
                <Text style={styles.welcome}>Welcome to Scotch Night</Text>
                <Text style={styles.iam}>And you are...</Text>
                <Picker
                    selectedValue={members.current}
                    onValueChange={member => this._handleTextChange(member)}>
                    {memberItems}
                </Picker>
                <Button backgroundColor='#00817d' title='Start Tasting' onPress={this._handleOnPress} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log('state me');
    console.log(JSON.stringify(state));
    return state;
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(memberActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetMember);

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    welcome: {
        textAlign: 'center',
        marginTop: 100,
        fontSize: 30
    },
    iam: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 25
    }
});
