// @flow
import React from 'react';
import { View, Text } from 'react-native';

const BottleDetail = (props: any) => {
    let { bottle } = props.navigation.state.params;

    return (
        <View>
            <Text>Distillery = {bottle.distillery}</Text>
        </View>
    );
};

export default BottleDetail;
