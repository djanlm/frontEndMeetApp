import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    cursor: pointer;

    span {
      display: ${props => (props.hasPreview ? 'none' : 'flex')};
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font: 20px 'Helvetica', sans-serif;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.4);
      height: 80px;
    }

    img {
      display: ${props => (props.hasPreview ? 'block' : 'none')};
      max-height: 300px;
      width: 100%;
      object-fit: cover;
    }
    input {
      display: none;
    }
  }
`;
