// @flow
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottleRatingText = (props: any) => {
    let {rating} = props;

    if(rating === 0) {
        return (
            <View>
                <Text style={{textAlign: 'center', fontSize: 10, fontStyle: 'italic', color: '#333'}}>how was it?</Text>
            </View>
        );
    }
    return (
        <View>
            <Text style={{textAlign: 'center', fontSize: 10, fontStyle: 'italic', color: '#333'}}>you rated this a {rating} out of 5</Text>
        </View>
    );
};

const BottleRating = (props: any) => {
    let { onPress, rating } = props;
    let hearts = [];

    for(let i = 0; i < rating; i++) {
      hearts.push(
          <TouchableWithoutFeedback key={i} onPress={onPress.bind(null, i+1)}>
              <Ionicons name="ios-star" size={40} color='#000' style={{width: 50, height: 40, textAlign: 'center'}} />
          </TouchableWithoutFeedback>
      );
    }

    for(let i = rating; i < 5; i++) {
      hearts.push(
          <TouchableWithoutFeedback key={i} onPress={onPress.bind(null, i+1)}>
              <Ionicons name="ios-star-outline" size={40} color='#000' style={{width: 50, height: 40, textAlign: 'center'}} />
          </TouchableWithoutFeedback>
      );
    }

    return (
        <View style={{flexDirection: 'column'}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                {hearts}
            </View>
            <BottleRatingText rating={rating} />
        </View>
    );
}

class BottleDetail extends React.Component {
    constructor(props) {
        super(props);

        this._handleOnPressRating = this._handleOnPressRating.bind(this);

        this.state = {
            rating: 0
        };
    }

    _handleOnPressRating(rating) {
        this.setState({ rating: rating });
    }

    render() {
        let { bottle } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <View style={styles.bottleDetailContainer}>
                    <View>
                        <Text style={styles.distillery}>{bottle.distillery}</Text>
                        <Text style={styles.bottleName}>{bottle.name}</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 10, textAlign: 'center'}}>Rating</Text>
                        <Text style={{fontSize: 24, textAlign: 'center'}}>4.5/5.0</Text>
                    </View>
                </View>
                <BottleRating rating={this.state.rating} onPress={this._handleOnPressRating} />
            </View>
        );
    }
};

const PROVIDER_IMAGE_SIZE = 40;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bottleContainer: {
        flexDirection: 'row'
    },
    bottleDetailContainer: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        padding: 15
    },
    distillery: {
        fontSize: 24,
        textAlign: 'center'
    },
    bottleName: {
        fontSize: 18,
        textAlign: 'center'
    },
    description: {
        fontSize: 14
    },
    providerContainer: {
        flexDirection: 'row'
    },
    providerImage: {
        width: PROVIDER_IMAGE_SIZE,
        height: PROVIDER_IMAGE_SIZE,
        borderRadius: PROVIDER_IMAGE_SIZE / 2,
        marginRight: 10
    },
    providerDetailsContainer: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    meetingDate: {
        fontSize: 13
    }
});
export default BottleDetail;
