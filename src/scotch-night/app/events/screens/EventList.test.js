import React from 'react';
import renderer from 'react-test-renderer';
import Store from '../../store';
import EventList from './EventList';

test('renders correctly', () => {
    const tree = renderer.create(<EventList store={Store} />).toJSON();
    expect(tree).toMatchSnapshot();
});
