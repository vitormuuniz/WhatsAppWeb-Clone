import styled from "styled-components";

interface IStyMessageLine {
  readonly sentByMe: boolean;
}
export const StyMessageLine = styled.div<IStyMessageLine>`
  margin-bottom: 10px;
  display: flex;
  justify-content: ${(props) => (props.sentByMe ? `flex-end` : `flex-start`)};
`;

interface IStyMessageObject {
  readonly sentByMe: boolean;
}
export const StyMessageObject = styled.div<IStyMessageObject>`
  background-color: ${(props) => (props.sentByMe ? `#dcf8c6` : `#fff`)};
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 90%;
`;

export const StyMessageContent = styled.div`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;

export const StyMessageDate = styled.div`
  font-size: 12px;
  color: #999;
  margin-right: 5px;
  text-align: right;
  height: 15px;
  margin-top: -15px;
  margin-left: 50px;
`;
