import { act, renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { useUsers, UsersContextProvider } from '../users';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Users Hook', () => {
  it('should be able to fetch all GitHub users', async () => {
    const apiResponse = [
      {
        login: 'mojombo',
        id: 1,
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
    ];

    apiMock.onGet('users').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useUsers(), {
      wrapper: UsersContextProvider,
    });

    act(() => {
      result.current.fetchUsersList();
    });

    await waitForNextUpdate();

    expect(result.current.usersList).toEqual(apiResponse);
  });

  it('should be able to fetch a specific user', async () => {
    const apiResponse = {
      login: 'mojombo',
      id: 1,
      name: 'Tom Preston-Werner',
      company: '@chatterbugapp, @redwoodjs, @preston-werner-ventures ',
      location: 'San Francisco',
      email: null,
      hireable: null,
      bio: null,
      public_repos: 63,
      followers: 22764,
      following: 11,
    };

    apiMock.onGet('users/mojombo').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useUsers(), {
      wrapper: UsersContextProvider,
    });

    act(() => {
      result.current.fetchUserDetailed('mojombo');
    });

    await waitForNextUpdate();

    expect(result.current.userDetailed).toEqual(apiResponse);
  });
});
