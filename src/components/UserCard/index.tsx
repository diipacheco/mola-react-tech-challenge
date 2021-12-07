import React from 'react';
import { Link } from 'react-router-dom';

import { IUser } from '../../hooks/users';

import { Container, Avatar } from './styles';

interface IUserCardProps {
  userData: IUser;
}

export const UserCard: React.FC<IUserCardProps> = ({ userData }) => (
  <Container>
    <Avatar avatar_url={userData.avatar_url} />
    <h1>
      <a target="_blank" href={userData.html_url} rel="noreferrer">
        {`@${userData.login}`}
      </a>
    </h1>
    <Link to={`profile/${userData.login}`}>
      See profile
    </Link>
  </Container>
);
