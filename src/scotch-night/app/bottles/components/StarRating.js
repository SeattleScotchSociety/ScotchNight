import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Star(props) {
    let { rating, index, onPress } = props;

    if(rating >= index) {
        return (<FontAwesome name='star' size={40} color='#FFD700' onPress={onPress.bind(null, index)} />);
    }
    else if(Math.ceil(rating) === index) {
        return (<FontAwesome name='star-half-full' size={40} color='#FFD700' onPress={onPress.bind(null, index)} />);
    }
    else {
        return (<FontAwesome name='star-o' size={40} color='#FFD700' onPress={onPress.bind(null, index)} />);
    }
}

export default function StarRating(props) {
    let { rating, onPress } = props;
    let stars = [];

    for(let i = 1; i <= 5; i++) {
        stars.push(<Star key={i} rating={rating} onPress={onPress} index={i} />);
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {stars}
        </View>
    );
};

StarRating.propTypes = {
    onPress: PropTypes.func,
    rating: PropTypes.number
};

StarRating.defaultProps = {
    onPress: function() {},
    rating: 0
};
