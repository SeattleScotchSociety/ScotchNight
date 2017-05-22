import React from 'react';
import renderer from 'react-test-renderer';
import Store from '../../store';
import EventDetail from './EventDetail';

test('renders correctly', () => {
    const tree = renderer
        .create(
            <EventDetail
                store={Store}
                navigation={{
                    state: {
                        params: {
                            event: {
                                date: '1/12/1111',
                                location: 'A Pineapple Under the Sea',
                                description: 'SPONGEBOB SQUAREPANTS!'
                            }
                        }
                    }
                }}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
