import { user } from './user';
import { ActionType } from '../action';
import { AuthorizationStatus } from '../../const';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {})).toEqual({authorizationStatus: AuthorizationStatus.UNKNOWN, email: ''});
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      email: '',
    };

    const requireAuthorizationAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requireAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, email: ''});
  });

  it('should update user email', () => {
    const testEmail = 'example@mail.com';

    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      email: '',
    };

    const setUserAction= {
      type: ActionType.SET_USER,
      payload: testEmail,
    };

    expect(user(state, setUserAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, email: testEmail});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      email: '',
    };

    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(user(state, logoutAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, email: ''});
  });
});
