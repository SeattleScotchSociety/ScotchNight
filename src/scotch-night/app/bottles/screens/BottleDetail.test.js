import React from 'react';
import renderer from 'react-test-renderer';
import Store from '../../store';
import BottleDetail from './BottleDetail';

test('renders correctly', () => {
    const tree = renderer
        .create(<BottleDetail store={Store} navigation={{ state: { params: { bottle: {} } } }} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
