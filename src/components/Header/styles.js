import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;

  button {
    background: #d44059;
    border: 0;
    padding: 15px;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      background: ${darken(0.05, '#d44059')};
    }
  }
`;

export const Profile = styled.div`
  margin-right: 20px;
  p {
    margin-bottom: 5px;
  }
  a {
    text-decoration: none;
    float: right;
    color: #999;
    font-size: 14px;
    transition: color 0.5s;

    &:hover {
      color: #bbb;
    }
  }
`;
