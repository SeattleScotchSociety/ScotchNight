import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Bottles from './bottles';
let { AddBottle, BottleList, BottleDetail } = Bottles.Screens;

import EventList from './events/screens/EventList';
import AddReview from './reviews/screens/AddReview';
import BottlesTabIcon from './components/TabIcons/BottlesTabIcon';
import EventsTabIcon from './components/TabIcons/EventsTabIcon';
import ReviewsTabIcon from './components/TabIcons/ReviewsTabIcon';
import Splash from './screens/Splash';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: '#050B7A',
        paddingTop: 20
    },
    headerTintColor: '#fff'
};

const BottleStack = StackNavigator(
    {
        BottleList: { screen: BottleList },
        AddBottle: { screen: AddBottle },
        BottleDetail: { screen: BottleDetail }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            ...defaultNavigationOptions,
            tabBarIcon: props => <BottlesTabIcon {...props} />
        }
    }
);

const EventStack = StackNavigator(
    {
        EventList: { screen: EventList }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            ...defaultNavigationOptions,
            tabBarIcon: props => <EventsTabIcon {...props} />
        }
    }
);

const ReviewStack = StackNavigator(
    {
        AddReview: { screen: AddReview }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            ...defaultNavigationOptions,
            tabBarIcon: props => <ReviewsTabIcon {...props} />
        }
    }
);

const MainApp = TabNavigator(
    {
        Bottles: { screen: BottleStack },
        Events: { screen: EventStack },
        Reviews: { screen: ReviewStack }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            labelStyle: {
                fontSize: 14
            },
            style: {
                backgroundColor: '#fff',
                height: 55
            },
            inactiveTintColor: '#888',
            activeTintColor: '#3454DA'
        }
    }
);

const ScotchNight = StackNavigator(
    {
        SplashScreen: { screen: Splash },
        MainApp: { screen: MainApp }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            header: null
        }
    }
);

export default ScotchNight;
