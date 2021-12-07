import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  width: 100%;
  height: 120px;
  align-items: center;
  padding: 0 100px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.1);

  > h1 {
    color: var(--blue);
    font-size: 30px;
  }
`;
