import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useUsers } from '../../hooks/users';

import {
  Container, Content, Avatar, Infos,
} from './styles';

export const Profile: React.FC = () => {
  const { userDetailed, fetchUserDetailed } = useUsers();

  const location = useLocation();

  useEffect(() => {
    fetchUserDetailed(location.pathname.split('/')[2]);
  }, [location, fetchUserDetailed]);

  return (
    <Container>
      <Content>
        <Avatar avatar_url={userDetailed?.avatar_url} />
        <h1>{userDetailed?.name}</h1>
        <a target="_blank" href={`${userDetailed?.html_url}`} rel="noreferrer">
          {`@${userDetailed?.login}`}
        </a>
        {userDetailed?.bio && (
          <p>{userDetailed.bio}</p>
        )}
        {userDetailed?.location && (
          <p>{userDetailed.location}</p>
        )}
        <Infos>
          <div>
            <strong>{userDetailed?.public_repos}</strong>
            <p>Repositories</p>
          </div>
          <div>
            <strong>{userDetailed?.followers}</strong>
            <p>Followers</p>
          </div>
          <div>
            <strong>{userDetailed?.following}</strong>
            <p>Following</p>
          </div>
        </Infos>
      </Content>
    </Container>
  );
};
