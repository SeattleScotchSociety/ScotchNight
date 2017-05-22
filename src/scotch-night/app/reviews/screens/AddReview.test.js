import React from 'react';
import renderer from 'react-test-renderer';
import Store from '../../store';
import AddReview from './AddReview';

test('renders correctly', () => {
    const tree = renderer.create(<AddReview store={Store} />).toJSON();
    expect(tree).toMatchSnapshot();
});
