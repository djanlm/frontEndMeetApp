import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 940px;
  margin-top: 50px;

  form {
    display: flex;
    flex-direction: column;

    > span {
      color: #fff;
    }

    hr {
      margin-top: 20px;
      margin-bottom: 20px;
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
    }
    input {
      padding: 20px 30px 20px 30px;
      margin-bottom: 10px;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      font-size: 18px;
      color: #eee;
    }

    div {
      display: flex;
      justify-content: flex-end;
      margin-top: 5px;
      button {
        display: flex;
        justify-content: space-around;
        color: #fff;
        background: #f94d6a;
        border-radius: 4px;
        width: 162px;
        border: 0;
        padding: 12px 20px;
        align-self: right;
        transition: background 0.3s;

        &:hover {
          background: ${darken(0.05, '#f94d6a')};
        }
      }
    }
  }
`;
