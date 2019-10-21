import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 940px;

  form {
    display: flex;
    flex-direction: column;

    > input {
      padding: 15px 30px 15px 30px;
      margin-bottom: 10px;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      font-size: 18px;
      color: #eee;
    }
    > textarea {
      padding: 15px 30px 15px 30px;
      margin-bottom: 10px;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      font-size: 18px;
      color: #eee;
      height: 200px;
      resize: none;
    }
  }
  button {
    color: #fff;
    background: #f94d6a;
    border: 0;
    border-radius: 4px;
    padding: 15px 25px 15px 25px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 180px;
    transition: background 0.3s;
    align-self: flex-end;

    span {
      margin-left: 15px;
    }
    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }
  }
`;
