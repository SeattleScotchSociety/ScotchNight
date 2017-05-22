import React from 'react';
import renderer from 'react-test-renderer';
import Store from '../../store';
import AddEvent from './AddEvent';

test('renders correctly', () => {
    const tree = renderer.create(<AddEvent store={Store} />).toJSON();
    expect(tree).toMatchSnapshot();
});
