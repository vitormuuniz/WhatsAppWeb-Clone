import AttachFileIcon from "@material-ui/icons/AttachFile";
import CloseIcon from "@material-ui/icons/Close";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { onChatContent } from "../../../config/Api";
import { Message } from "../../../interfaces/Message";
import { User } from "../../../interfaces/User";
import { MessageItem } from "./MessageItem";
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
  user: User;
  activeChat: User;
}

const ChatWindow: React.FC<IProps> = ({ user, activeChat }) => {
  const bodyRef = useRef<any>();
  const { transcript } = useSpeechRecognition();

  const [emojiOpen, setEmojiOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [listening, setListening] = useState<boolean>(false);
  const [messagesList, setMessagesList] = useState<Message[]>([]);

  useEffect(() => {
    setMessagesList([]);
    onChatContent(user.chatId!, setMessagesList);
  }, [user.chatId]);

  useEffect(() => {
    if (bodyRef.current.scrollHeight > bodyRef.current.offsetHeight) {
      bodyRef.current.scrollTop =
        bodyRef.current.scrollHeight - bodyRef.current.offsetHeight;
    }
  }, [messagesList]);

  function handleEmojiClick(e: any, emojiObject: any) {
    setText(text + emojiObject.emoji);
  }

  function handleOpenEmoji() {
    setEmojiOpen(true);
  }

  function handleCloseEmoji() {
    setEmojiOpen(false);
  }

  function handleMicClick() {
    if (SpeechRecognition.browserSupportsSpeechRecognition() !== null) {
      if (!listening) {
        SpeechRecognition.startListening();
        setListening(true);
      }

      if (listening) {
        SpeechRecognition.stopListening();
        setListening(false);
        setText(text + transcript);
      }
    }
  }

  function handleSendClick() {}

  return (
    <Content>
      <Header>
        <HeaderInfo>
          <HeaderAvatar src={activeChat.avatar} />

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

      <Body ref={bodyRef}>
        {messagesList.map((message: any, key: number) => (
          <MessageItem key={key} activeUser={activeChat} message={message} />
        ))}
      </Body>

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
              <MicIcon
                htmlColor={listening ? "#126ECE" : "#919191"}
                onClick={handleMicClick}
              />
            </ButtonArea>
          ) : (
            <ButtonArea>
              <SendIcon htmlColor="#919191" onClick={handleSendClick} />
            </ButtonArea>
          )}
        </FooterPos>
      </Footer>
    </Content>
  );
};

export { ChatWindow };
