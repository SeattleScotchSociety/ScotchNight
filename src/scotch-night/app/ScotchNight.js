import React from 'react';
import { StackNavigator } from 'react-navigation';
import Bottles from './bottles';
let { AddBottle, BottleList, BottleDetail } = Bottles.Screens;

import EventList from './events/screens/EventList';
import AddEvent from './events/screens/AddEvent';
import EventDetail from './events/screens/EventDetail';
import SetMember from './members/screens/SetMember';

import Splash from './screens/Splash';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: '#455A64'
    },
    headerTintColor: '#fff'
};

const MainApp = StackNavigator(
    {
        Member: { screen: SetMember },
        Events: { screen: EventList },
        EventDetail: { screen: EventDetail },
        AddEvent: { screen: AddEvent },
        Bottle: { screen: BottleDetail },
        AddBottle: { screen: AddBottle }
    },
    {
        navigationOptions: {
        }
    }
);

const ScotchNight = StackNavigator(
    {
        SplashScreen: { screen: Splash },
        MainApp: { screen: MainApp }
    },
    {
        headerMode: 'float',
        navigationOptions: {
            header: null
        }
    }
);

export default ScotchNight;
