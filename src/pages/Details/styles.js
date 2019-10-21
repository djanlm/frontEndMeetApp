import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 940px;
  margin-top: 50px;
`;
export const Top = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div`
  color: #eee;
  font-size: 32px;
  font-weight: bold;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 0;
    padding: 10px 30px;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
  }

  #edit {
    margin-right: 10px;
    background: #4dbaf9;
    transition: background 0.3s;

    span {
      margin-left: 10px;
    }
    &:hover {
      background: ${darken(0.05, '#4dbaf9')};
    }
  }

  #cancel {
    background: #d44059;
    transition: background 0.3s;

    span {
      margin-left: 10px;
    }

    &:hover {
      background: ${darken(0.05, '#d44059')};
    }
  }
`;
export const Image = styled.div`
  img {
    max-height: 300px;
    width: 100%;
    object-fit: cover;
  }
`;
export const Description = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  p {
    color: #eee;
    line-height: 32px;
  }
`;
export const Info = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.5);
`;
export const Date = styled.div`
  margin-right: 30px;

  span {
    margin-left: 10px;
  }
`;
export const Place = styled.div`
  span {
    margin-left: 10px;
  }
`;
