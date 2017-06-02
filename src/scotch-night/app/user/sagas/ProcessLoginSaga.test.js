import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { processLogin } from './ProcessLoginSaga';
import { userLoggedIn } from '../UserActions';
import { createMember } from '../../members/api/MemberApi';

jest.mock('../../members/api/MemberApi', () => {
    return {
        NavigationActions: {
            createMember: () => {
                return {
                    username: 'tmerkel',
                    firstName: 'Travis',
                    lastName: 'Merkel',
                    email: 'tmerkel@live.com'
                };
            }
        }
    };
});

it('creates member for logged in user', () => {
    return expectSaga(processLogin).call(createMember('tmerkel')).run();
});
