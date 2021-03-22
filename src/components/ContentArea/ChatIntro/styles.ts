import styled from "styled-components";

export const ChatIntroContainer = styled.div`
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  h1 {
    font-size: 32px;
    color: #525252;
    font-weight: normal;
    margin-top: 30px;
  }

  h2 {
    font-size: 14px;
    color: #777;
    font-weight: normal;
    margin-top: 20px;
    line-height: 20px;
    text-align: center;
  }
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  height: 6px;
  margin: 0;
  background-color: #4adf83;
  border-width: 0;
  position: absolute;
  bottom: 0;
`;

export const ChatIntroImage = styled.img`
  width: 250px;
  height: auto;
`;
