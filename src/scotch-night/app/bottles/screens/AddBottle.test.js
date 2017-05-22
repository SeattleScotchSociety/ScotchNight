import React from 'react';
import renderer from 'react-test-renderer';
import Store from '../../store';
import AddBottle from './AddBottle';

test('renders correctly', () => {
    const tree = renderer.create(<AddBottle store={Store} />).toJSON();
    expect(tree).toMatchSnapshot();
});
