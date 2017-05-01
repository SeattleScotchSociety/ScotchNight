import React from 'react';
import { StackNavigator } from 'react-navigation';
import BottlesOverview from './bottles/views/bottlesOverview';
import BottleDetail from './bottles/views/bottleDetail';

const ScotchNight = StackNavigator({
    Overview: { screen: BottlesOverview },
    BottleDetail: { screen: BottleDetail }
});

export default ScotchNight;
