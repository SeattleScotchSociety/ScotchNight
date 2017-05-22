// @flow
import React from 'react';
import { ListItem } from 'react-native-elements';

const BottleListItem = (props: any) => {
    let { bottle, onPress } = props;

    let bottleTitle: string = `${bottle.distillery} - ${bottle.name}`;

    return <ListItem title={bottleTitle} onPress={onPress} />;
};

export default BottleListItem;
