import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 315px;
  height: 306px;

  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
      padding: 14px 10px 14px 10px;
      margin-bottom: 8px;
      border-radius: 4px;
      border: none;
      background: rgba(0, 0, 0, 0.2);
      font-size: 16px;
      color: #aaa;
    }

    button {
      width: 100%;
      padding: 12px 10px 12px 10px;
      margin-bottom: 4px;
      border: none;
      background: #f94d6a;
      color: #fff;
      font-size: 18px;
      border-radius: 4px;
      margin-top: 6px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#f94d6a')};
      }
    }

    a {
      margin-top: 15px;
      color: #aaa;
      transition: color 0.3s;

      &:hover {
        color: #fff;
      }
    }
  }
`;
