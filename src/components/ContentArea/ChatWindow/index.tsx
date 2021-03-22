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
import { onChatContent, sendMessage } from "../../../config/Api";
import { Chat } from "../../../interfaces/Chat";
import { Message } from "../../../interfaces/Message";
import { User } from "../../../interfaces/User";
import { MessageItem } from "./MessageItem";
import {
  StyBody,
  StyButtonArea,
  StyChatWindowContainer,
  StyEmojiArea,
  StyFooter,
  StyFooterInput,
  StyFooterInputArea,
  StyFooterPos,
  StyFooterPre,
  StyHeader,
  StyHeaderAvatar,
  StyHeaderButtons,
  StyHeaderInfo,
  StyHeaderName,
} from "./styles";

interface IProps {
  user: User;
  activeChat: Chat;
}

const ChatWindow: React.FC<IProps> = ({ user, activeChat }) => {
  const bodyRef = useRef<any>();
  const { transcript } = useSpeechRecognition();

  const [emojiOpen, setEmojiOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [listening, setListening] = useState<boolean>(false);
  const [messagesList, setMessagesList] = useState<Message[]>([]);
  const [usersList, setUsersList] = useState<User[]>();

  useEffect(() => {
    setMessagesList([]);
    let unsub = onChatContent(
      activeChat.chatId!,
      setMessagesList,
      setUsersList
    );
    return unsub;
  }, [activeChat.chatId]);

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

  function handleInputKeyUp(e: any) {
    if (e.keyCode === 13) {
      handleSendClick();
    }
  }

  function handleSendClick() {
    if (text !== "") {
      sendMessage(activeChat, user.id!, "text", text, usersList!);
      setText("");
      setEmojiOpen(false);
    }
  }

  return (
    <StyChatWindowContainer>
      <StyHeader>
        <StyHeaderInfo>
          <StyHeaderAvatar src={activeChat.image} />

          <StyHeaderName>{activeChat.name}</StyHeaderName>
        </StyHeaderInfo>

        <StyHeaderButtons>
          <StyButtonArea>
            <SearchIcon htmlColor="#919191" />
          </StyButtonArea>

          <StyButtonArea>
            <MoreVertIcon htmlColor="#919191" />
          </StyButtonArea>
        </StyHeaderButtons>
      </StyHeader>

      <StyBody ref={bodyRef}>
        {messagesList.map((message: any, key: number) => (
          <MessageItem key={key} user={user} message={message} />
        ))}
      </StyBody>

      <StyEmojiArea emojiOpen={emojiOpen}>
        <EmojiPicker
          disableSearchBar
          disableSkinTonePicker
          onEmojiClick={handleEmojiClick}
        />
      </StyEmojiArea>

      <StyFooter>
        <StyFooterPre>
          {emojiOpen && (
            <StyButtonArea>
              <CloseIcon htmlColor="#919191" onClick={handleCloseEmoji} />
            </StyButtonArea>
          )}
          <StyButtonArea>
            <InsertEmoticonIcon
              htmlColor={emojiOpen ? "#009688" : "#919191"}
              onClick={handleOpenEmoji}
            />
          </StyButtonArea>
          <StyButtonArea>
            <AttachFileIcon htmlColor="#919191" />
          </StyButtonArea>
        </StyFooterPre>

        <StyFooterInputArea>
          <StyFooterInput
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyUp={handleInputKeyUp}
          />
        </StyFooterInputArea>

        <StyFooterPos>
          {text.length === 0 ? (
            <StyButtonArea>
              <MicIcon
                htmlColor={listening ? "#126ECE" : "#919191"}
                onClick={handleMicClick}
              />
            </StyButtonArea>
          ) : (
            <StyButtonArea>
              <SendIcon htmlColor="#919191" onClick={handleSendClick} />
            </StyButtonArea>
          )}
        </StyFooterPos>
      </StyFooter>
    </StyChatWindowContainer>
  );
};

export { ChatWindow };
