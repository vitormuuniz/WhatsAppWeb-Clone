import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  button {
    border: 0;
    width: 16rem;
    height: 2rem;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      font-size: 20px;
      margin-right: 15px;
    }
  }
`;

export const FacebookButton = styled.button`
  background-color: #1877f2;
`;

export const GoogleButton = styled.button`
  background-color: #008000;
`;
