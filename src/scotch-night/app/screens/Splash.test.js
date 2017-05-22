import React from 'react';
import Splash from './Splash';

import renderer from 'react-test-renderer';
jest.mock('react-navigation', () => {
    return { NavigationActions: { reset: () => {}, navigate: () => {} } };
});

test('renders correctly', () => {
    const tree = renderer.create(<Splash navigation={{ dispatch: () => {} }} />).toJSON();
    expect(tree).toMatchSnapshot();
});
