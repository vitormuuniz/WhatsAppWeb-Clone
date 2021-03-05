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
  useSpeechRecognition
} from "react-speech-recognition";
import { User } from "../../interfaces/User";
import { Message } from "../../interfaces/Message";
import MessageItem from "../MessageItem";
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
  HeaderName
} from "./styles";

interface IProps {
  activeUser: User;
}

const ChatWindow: React.FC<IProps> = ({ activeUser }) => {
  const bodyRef = useRef<any>();
  const { transcript } = useSpeechRecognition();

  const [emojiOpen, setEmojiOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [listening, setListening] = useState<boolean>(false);
  const [messagesList] = useState<Message[]>([
    {
      idAuthor: 123,
      content: 'bla bla bla',
      date: '19:05'
    },
    {
      idAuthor: 321,
      content: 'bla bla bla bla bla bla',
      date: '19:06'
    },
    {
      idAuthor: 321,
      content: 'bla bla bla bla bla bla bla bla bla',
      date: '19:10'
    },
    {
      idAuthor: 123,
      content: 'BLA BLA BLA',
      date: '19:05'
    },
    {
      idAuthor: 321,
      content: 'BLA BLA BLA BLA BLA BLA',
      date: '19:06'
    },
    {
      idAuthor: 321,
      content: 'BLA BLA BLA BLA BLA BLA BLA BLA BLA',
      date: '19:10'
    },
    {
      idAuthor: 123,
      content: 'bla bla bla',
      date: '19:05'
    },
    {
      idAuthor: 321,
      content: 'bla bla bla bla bla bla',
      date: '19:06'
    },
    {
      idAuthor: 321,
      content: 'bla bla bla bla bla bla bla bla bla',
      date: '19:10'
    },
    {
      idAuthor: 123,
      content: 'bla bla bla',
      date: '19:05'
    },
    {
      idAuthor: 321,
      content: 'bla bla bla bla bla bla',
      date: '19:06'
    },
    {
      idAuthor: 321,
      content: 'bla bla bla bla bla bla bla bla bla',
      date: '19:10'
    },
    {
      idAuthor: 123,
      content: 'bla bla bla',
      date: '19:05'
    },
    {
      idAuthor: 321,
      content: 'bla bla bla bla bla bla',
      date: '19:06'
    },
    {
      idAuthor: 321,
      content: 'bla bla bla bla bla bla bla bla bla',
      date: '19:10'
    },
    {
      idAuthor: 123,
      content: 'bla bla bla',
      date: '19:05'
    },
    {
      idAuthor: 321,
      content: 'bla bla bla bla bla bla',
      date: '19:06'
    },
    {
      idAuthor: 321,
      content: 'bla bla bla bla bla bla bla bla bla',
      date: '19:10'
    },
  ]);

  useEffect(() => {
    if (bodyRef.current.scrollHeight > bodyRef.current.offsetHeight) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight - bodyRef.current.offsetHeight;
    }  

  }, [messagesList])

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
          <HeaderAvatar src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />

          <HeaderName>{activeUser.name}</HeaderName>
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
          <MessageItem 
              activeUser={activeUser}
              message={message}
              key={key}
          />
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

export default ChatWindow;
