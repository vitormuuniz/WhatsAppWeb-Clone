import styled from "styled-components";

interface IMessageLine {
  readonly sentByMe: boolean;
}
export const MessageLine = styled.div<IMessageLine>`
  margin-bottom: 10px;
  display: flex;
  justify-content: ${(props) => (props.sentByMe ? `flex-end` : `flex-start`)};
`;

interface IMessageObject {
  readonly sentByMe: boolean;
}
export const MessageObject = styled.div<IMessageObject>`
  background-color: ${(props) => (props.sentByMe ? `#dcf8c6` : `#fff`)};
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 90%;
`;

export const MessageContent = styled.div`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.div`
  font-size: 12px;
  color: #999;
  margin-right: 5px;
  text-align: right;
  height: 15px;
  margin-top: -15px;
  margin-left: 50px;
`;
