import React, { useEffect } from 'react';

import { useUsers } from '../../hooks/users';
import { usePagination } from '../../hooks/usePagination';

import { UserCard } from '../../components/UserCard';

import {
  Container, UsersListContainer, Pagination, PageButton,
} from './styles';

export const Main: React.FC = () => {
  const { usersList, fetchUsersList } = useUsers();

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 4,
    count: usersList?.length,
  });

  useEffect(() => {
    fetchUsersList();
  }, [fetchUsersList]);

  return (
    <Container>
      <UsersListContainer>
        {usersList?.slice(firstContentIndex, lastContentIndex).map((user) => (
          <UserCard userData={user} />
        ))}
      </UsersListContainer>

      <Pagination>
        <PageButton disabled={page === 1} onClick={prevPage}>&larr;</PageButton>
        {Array.from(Array(totalPages).keys()).map((i) => (
          <PageButton
            disabled={page === i + 1}
            onClick={() => setPage(i + 1)}
            key={i}
            className={`page ${page === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </PageButton>
        ))}
        <PageButton
          onClick={nextPage}
          disabled={page === totalPages}
        >
          &rarr;
        </PageButton>
      </Pagination>
    </Container>
  );
};
