import styled from "styled-components";

export const StyChatWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyHeader = styled.div`
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyHeaderAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 15px;
`;

export const StyHeaderName = styled.div`
  font-size: 17px;
  color: #000;
`;

export const StyHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const StyButtonArea = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyBody = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: #e5ddd5;
  background-size: cover;
  background-position: center;
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  padding: 20px 20px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

interface IStyEmojiArea {
  readonly emojiOpen: boolean;
}
export const StyEmojiArea = styled.div<IStyEmojiArea>`
  height: ${(props) => (props.emojiOpen ? `200px` : `0`)};
  overflow-y: hidden;
  transition: all ease 0.3s;

  .emoji-picker-react {
    width: auto;
    background: none;

    .emoji-group:before {
      background: none;
    }
  }
`;

export const StyFooter = styled.div`
  height: 62px;
  display: flex;
  align-items: center;
`;

export const StyFooterPre = styled.div`
  display: flex;
  margin: 0 15px;
`;

export const StyFooterInputArea = styled.div`
  flex: 1;
`;

export const StyFooterInput = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  outline: 0;
  background-color: #fff;
  border-radius: 20px;
  font-size: 15px;
  color: #4a4a4a;
  padding-left: 15px;
`;

export const StyFooterPos = styled.div`
  display: flex;
  margin: 0 15px 0 30px;
`;
