import React from 'react';
import renderer from 'react-test-renderer';
import Store from '../../store';
import BottleList from './BottleList';

test('renders correctly', () => {
    const tree = renderer.create(<BottleList store={Store} navigation={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
});
