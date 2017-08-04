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
        this.props.actions.memberSelected(member);
    }

    _handleOnPress() {
        const { navigate } = this.props.navigation;

        navigate('Events', {});
    }

    render() {
        let { members, currentMember } = this.props;

        let memberItems = members.map((member) => {
            return (
                <Picker.Item
                    key={member.email}
                    label={`${member.firstName} ${member.lastName}`}
                    value={member.id} />
            );
        });

        return (
            <View style={{ flex: 1 }}>
                <Tile
                    imageSrc={require('../../../assets/whiskey-image.jpg')}
                    title="Welcome to Scotch Night"
                    featured
                    caption="" />
                <Picker
                    selectedValue={currentMember.id}
                    onValueChange={member => this._handleTextChange(member)}>
                    {memberItems}
                </Picker>
                <Button backgroundColor='#00817d' title='Start Tasting' onPress={this._handleOnPress} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    let members = state.members.all;
    let currentMember = state.members.selected;

    return { members, currentMember };
}

function mapDispatchToProps(dispatch) {
    let actions = { ...memberActions };

    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetMember);

const styles = StyleSheet.create({
    welcome: {
        fontSize: 30,
        color: '#fff',
        backgroundColor: 'transparent'
    }
});
