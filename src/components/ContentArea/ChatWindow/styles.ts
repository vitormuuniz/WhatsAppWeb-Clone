import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeaderAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 15px;
`;

export const HeaderName = styled.div`
  font-size: 17px;
  color: #000;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const ButtonArea = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Body = styled.div`
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

interface IEmojiArea {
  readonly emojiOpen: boolean;
}
export const EmojiArea = styled.div<IEmojiArea>`
  height: ${(props) => props.emojiOpen ? `200px` : `0` };
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

export const Footer = styled.div`
  height: 62px;
  display: flex;
  align-items: center;
`;

export const FooterPre = styled.div`
  display: flex;
  margin: 0 15px;
`;

export const FooterInputArea = styled.div`
  flex: 1;
`;

export const FooterInput = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  outline: 0;
  background-color: #FFF;
  border-radius: 20px;
  font-size: 15px;
  color: #4A4A4A;
  padding-left: 15px;
`;

export const FooterPos = styled.div`
  display: flex;
  margin: 0 15px 0 30px;
`;
