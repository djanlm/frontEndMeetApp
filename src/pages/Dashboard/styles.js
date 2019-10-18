import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 940px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin-bottom: 60px;

  strong {
    font-size: 32px;
  }

  button {
    color: #fff;
    background: #f94d6a;
    border: 0;
    border-radius: 4px;
    padding: 15px 35px 15px 35px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-left: 15px;
    }
    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }
  }
`;

export const List = styled.div`
  width: 100%;
`;

export const ListElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 20px 30px;
  background: rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  cursor: pointer;

  strong {
    font-size: 18px;
    color: #fff;
    flex-grow: 1;
  }

  span {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    margin-right: 30px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
