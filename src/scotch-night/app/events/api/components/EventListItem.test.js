import React from 'react';
import renderer from 'react-test-renderer';
import EventListItem from './EventListItem';

test('renders correctly', () => {
    const tree = renderer.create(<EventListItem event={{}} onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
});
