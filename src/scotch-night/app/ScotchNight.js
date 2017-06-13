import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Bottles from './bottles';
let { AddBottle, BottleList, BottleDetail } = Bottles.Screens;

import Add from './screens/Add';

import EventList from './events/screens/EventList';
import AddReview from './reviews/screens/AddReview';
import BottlesTabIcon from './components/TabIcons/BottlesTabIcon';
import EventsTabIcon from './components/TabIcons/EventsTabIcon';
import ReviewsTabIcon from './components/TabIcons/ReviewsTabIcon';
import AddTabIcon from './components/TabIcons/AddTabIcon';
import SettingsTabIcon from './components/TabIcons/SettingsTabIcon';
import NotesTabIcon from './components/TabIcons/NotesTabIcon';

import AddTabLabel from './components/TabLabels/AddTabLabel';
import NotesTabLabel from './components/TabLabels/NotesTabLabel';
import SettingsTabLabel from './components/TabLabels/SettingsTabLabel';
import BottlesLabel from './components/TabLabels/BottlesLabel';
import EventsLabel from './components/TabLabels/EventsLabel';

import Splash from './screens/Splash';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: '#455A64'
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
        headerMode: 'float',
        navigationOptions: {
            ...defaultNavigationOptions,
            tabBarLabel: props => <BottlesLabel {...props} />,
            tabBarIcon: props => <BottlesTabIcon {...props} />
        }
    }
);

const EventStack = StackNavigator(
    {
        EventList: { screen: EventList }
    },
    {
        headerMode: 'float',
        navigationOptions: {
            ...defaultNavigationOptions,
            tabBarLabel: props => <EventsLabel {...props} />,
            tabBarIcon: props => <EventsTabIcon {...props} />
        }
    }
);

const ReviewStack = StackNavigator(
    {
        AddReview: { screen: AddReview }
    },
    {
        headerMode: 'float',
        navigationOptions: {
            ...defaultNavigationOptions,
            tabBarIcon: props => <ReviewsTabIcon {...props} />
        }
    }
);

const AddStack = StackNavigator(
    {
        Add: { screen: Add }
    },
    {
        mode: 'modal',
        headerMode: 'none',
        navigationOptions: {
            ...defaultNavigationOptions,
            tabBarLabel: props => <AddTabLabel {...props} />,
            tabBarIcon: props => <AddTabIcon {...props} />
        }
    }
);

const SettingsStack = StackNavigator(
    {
        EventList: { screen: EventList }
    },
    {
        headerMode: 'float',
        navigationOptions: {
            ...defaultNavigationOptions,
            tabBarLabel: props => <SettingsTabLabel {...props} />,
            tabBarIcon: props => <SettingsTabIcon {...props} />
        }
    }
);

const NotesStack = StackNavigator(
    {
        EventList: { screen: EventList }
    },
    {
        headerMode: 'float',
        navigationOptions: {
            ...defaultNavigationOptions,
            tabBarLabel: props => <NotesTabLabel {...props} />,
            tabBarIcon: props => <NotesTabIcon {...props} />
        }
    }
);

const MainApp = TabNavigator(
    {
        Bottles: { screen: BottleStack },
        Events: { screen: EventStack },
        Add: { screen: AddStack },
        Notes: { screen: NotesStack },
        Settings: { screen: SettingsStack }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            labelStyle: {
                fontSize: 14
            },
            style: {
                backgroundColor: '#455A64',
                height: 55
            },
            inactiveTintColor: '#CFD8DC',
            activeTintColor: '#fff'
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
