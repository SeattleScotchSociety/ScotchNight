import React from 'react';
import renderer from 'react-test-renderer';
import BottleListItem from './BottleListItem';

test('renders correctly', () => {
    const tree = renderer.create(<BottleListItem bottle={{}} onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
});
