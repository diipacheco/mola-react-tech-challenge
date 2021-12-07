import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 120px;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 05px;


  width: 420px;
  background: var(--white);

  > h1 {
    margin-top: 24px;
    color: var(--black);
    font-size: 28px;
  }

  > a {
    color: var(--blue);
    font-size: 18px;
    margin-top: 10px;
  }

  > p {
    color: var(--dark-grey);
    margin-top: 12px;
  }
`;

interface IAvatarUrl {
  avatar_url: string;
}

export const Avatar = styled.div<IAvatarUrl>`
  width: 220px;
  height: 220px;
  margin-top: 50px;

  background-image: ${(props) => `url(${props.avatar_url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 50%;
  border: 4px solid var(--blue);
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 40px;
  background: rgb(88, 166, 255, 0.3);
  padding: 60px 40px;
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    text-align: center;

    > strong {
      color: var(--black);
      font-size: 20px;
    }

    > p {
      color: var(--dark-grey);
      font-size: 14px;
    }
  }
`;
