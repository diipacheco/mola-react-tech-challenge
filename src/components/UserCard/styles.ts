import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 250px;
  border-radius: 05px;
  background-color: var(--white);
  margin-right: 55px;
  padding: 15px 0;

  > h1 {
    > a {
      font-size: 16px;
      margin-top: 15px;
      color: var(--black);
    }
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 120px;
    height: 25px;
    font-size: 14px;
    color: var(--white);
    font-weight: bold;
    text-decoration: none;
    background: var(--blue);
    border-radius: 8px;
    margin-top: 15px;
    cursor: pointer;
  }
`;

interface IAvatar {
  avatar_url: string;
}

export const Avatar = styled.div<IAvatar>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.avatar_url})`};
  background-color: var(--white);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 3px solid var(--blue);
`;
