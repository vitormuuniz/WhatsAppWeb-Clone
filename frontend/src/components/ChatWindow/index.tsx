import AttachFileIcon from "@material-ui/icons/AttachFile";
import CloseIcon from "@material-ui/icons/Close";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
import { ChatItem } from "../../interfaces/ChatItem";
import {
  Body,
  ButtonArea,
  Content,
  EmojiArea,
  Footer,
  FooterInput,
  FooterInputArea,
  FooterPos,
  FooterPre,
  Header,
  HeaderAvatar,
  HeaderButtons,
  HeaderInfo,
  HeaderName,
} from "./styles";


interface IProps {
  activeChat: ChatItem;
}

const ChatWindow: React.FC<IProps> = ({ activeChat }) => {
  const [emojiOpen, setEmojiOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  function handleEmojiClick(e: any, emojiObject: any) {
    setText(text + emojiObject.emoji)
  }

  function handleOpenEmoji() {
    setEmojiOpen(true);
  }

  function handleCloseEmoji() {
    setEmojiOpen(false);
  }

  return (
    <Content>
      <Header>
        <HeaderInfo>
          <HeaderAvatar src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />

          <HeaderName>{activeChat.name}</HeaderName>
        </HeaderInfo>

        <HeaderButtons>
          <ButtonArea>
            <SearchIcon htmlColor="#919191" />
          </ButtonArea>

          <ButtonArea>
            <AttachFileIcon htmlColor="#919191" />
          </ButtonArea>

          <ButtonArea>
            <MoreVertIcon htmlColor="#919191" />
          </ButtonArea>
        </HeaderButtons>
      </Header>

      <Body></Body>

      <EmojiArea emojiOpen={emojiOpen}>
        <EmojiPicker
          disableSearchBar
          disableSkinTonePicker
          onEmojiClick={handleEmojiClick}
        />
      </EmojiArea>

      <Footer>
        <FooterPre>
          {emojiOpen && (
            <ButtonArea>
              <CloseIcon htmlColor="#919191" onClick={handleCloseEmoji} />
            </ButtonArea>
          )}
          <ButtonArea>
            <InsertEmoticonIcon
              htmlColor={emojiOpen ? "#009688" : "#919191"}
              onClick={handleOpenEmoji}
            />
          </ButtonArea>
        </FooterPre>

        <FooterInputArea>
          <FooterInput
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </FooterInputArea>

        <FooterPos>
          {text.length === 0 ? (
            <ButtonArea>
              <MicIcon htmlColor="#919191" />
            </ButtonArea>
          ) : (
            <ButtonArea>
              <SendIcon htmlColor="#919191" />
            </ButtonArea>
          )}
        </FooterPos>
      </Footer>
    </Content>
  );
};

export default ChatWindow;
