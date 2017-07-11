import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, Image } from 'react-native';
import { Button, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../MemberActions';

class SetMember extends Component {
    static navigationOptions = {
        title: 'Scotch Night'
    };

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
            <View style={{ flex: 1 }}>
                <Tile
                    imageSrc={require('../../../assets/whiskey-image.jpg')}
                    title="Welcome to Scotch Night"
                    featured
                    caption="" />
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
    return state;
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(memberActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetMember);

const styles = StyleSheet.create({
    welcome: {
        fontSize: 30,
        color: '#fff',
        backgroundColor: 'transparent'
    }
});
