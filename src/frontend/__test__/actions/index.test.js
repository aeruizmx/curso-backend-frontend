import { loginRequest, setFavorite } from '../../actions';
import movieMock from '../../__mocks__/movieMock';

describe('Actions', () => {
  test('Set favorite', () => {
    const payload = movieMock;
    const expectedAction = {
      type: 'SET_FAVORITE',
      payload
    };
    expect(setFavorite(payload)).toEqual(expectedAction);
  });
  test('Login', () => {
    const payload = {
      email: 'test@test.com',
      password: '1234567890'
    };
    const expectedAction = {
      type: 'LOGIN_REQUEST',
      payload
    };
    expect(loginRequest(payload)).toEqual(expectedAction);
  });
});