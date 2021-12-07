import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  width: 100%;
  height: 120px;
  align-items: center;
  padding: 0 100px;
  border-bottom: 1px solid rgb(249, 133, 111, 0.2);

  > h1 {
    color: var(--blue);
    font-size: 30px;
  }
`;
