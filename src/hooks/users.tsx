import React, {
  createContext, useState, useCallback, useMemo, useContext,
} from 'react';

import api from '../services/api';

export interface IUser {
   id: number,
   login: string;
   avatar_url: string;
   html_url: string;
}

interface IUserDetailed extends IUser {
    name: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    bio?: string;
    public_repos: number;
    followers: number;
    following: number;
}

interface IUsersContextData {
  usersList: IUser[];
  userDetailed: IUserDetailed;
  fetchUsersList(): Promise<void>;
  fetchUserDetailed(login: string): Promise<void>;
}

const UsersContext = createContext({} as IUsersContextData);

export const UsersContextProvider: React.FC = ({ children }) => {
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [userDetailed, setUserDetailed] = useState<IUserDetailed>({} as IUserDetailed);

  const fetchUsersList = useCallback(async () => {
    const response = await api.get('/users');
    setUsersList(response.data);
  }, []);

  const fetchUserDetailed = useCallback(async (login: string) => {
    const response = await api.get(`users/${login}`);
    setUserDetailed(response.data);
  }, []);

  const value = useMemo(() => ({
    usersList,
    setUsersList,
    userDetailed,
    setUserDetailed,
    fetchUsersList,
    fetchUserDetailed,
  }), [userDetailed, usersList, fetchUsersList, fetchUserDetailed]);

  return (
    <UsersContext.Provider
      value={value}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = (): IUsersContextData => {
  const context = useContext(UsersContext);

  return context;
};
