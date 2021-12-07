import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-top: 120px;
`;

export const UsersListContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 0 120px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  margin-top: 120px;
`;

const disabledButtonStyles = css`
  background-color: transparent !important;
  cursor: not-allowed;
  opacity: 0.5;
`;

export const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border: solid 1px var(--blue);
  background-color: transparent;
  border-radius: 0.7rem;

  color: var(--white);
  font-weight: bold;
  cursor: pointer;

  &:active {
    background-color: var(--blue);
  }

  &:hover {
    background-color: var(--blue);
  }

  ${(props) => props.disabled && disabledButtonStyles};
`;
