import { DivTitle, Title } from "../../styles/Aboutme";
import chatgpt from "../../assets/chatgpt-icon.svg";
import { useEffect, useState } from "react";
import {
  BackButton,
  BoxChat,
  BoxConversation,
  BoxTextChat,
  ButtonChat,
  FormChat,
  FromText,
  InputChat,
  Loader,
  TextConversation,
} from "../../styles/Chatgpt";
import createCompletionChatGTP from "../../API/chatgpt";
import { Back } from "@styled-icons/entypo/Back";
import { useNavigate } from "react-router-dom";

const ChatGPT = () => {
  const [message, setMessage] = useState("");
  const [update, setUpdate] = useState(false);
  const [chat, setChat] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleGetChat = () => {
    let messages: any = localStorage.getItem("chat") || [];
    if (messages.length > 0) {
      messages = JSON.parse(messages);
    }
    setChat(messages);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setDisabled(true);
    await createCompletionChatGTP(message);
    setMessage("");
    setUpdate(!update);
    setDisabled(false);
  };

  useEffect(() => {
    handleGetChat();
  }, [update]);

  return (
    <>
      <BackButton onClick={() => navigate("/")}>
        <Back size={20} />
      </BackButton>
      <BoxChat>
        <BoxTextChat>
          <DivTitle>
            <img src={chatgpt} alt="" style={{ width: "30px" }} />
            <Title>ChatGPT</Title>
          </DivTitle>
          {chat.length > 0
            ? chat.map((chat: any, id: number) => (
                <BoxConversation key={id}>
                  <FromText>
                    {chat?.from} {chat?.date}
                  </FromText>
                  <TextConversation color={chat.from}>
                    {chat?.messages}
                  </TextConversation>
                </BoxConversation>
              ))
            : null}
          {!disabled ? (
            <FormChat onSubmit={handleSubmit}>
              <InputChat
                placeholder="Write your question here"
                onChange={handleInputChange}
                type="text"
                value={message}
                required={true}
                maxLength={100}
              />
              <ButtonChat disabled={disabled} type="submit">
                Send
              </ButtonChat>
            </FormChat>
          ) : (
            <Loader></Loader>
          )}
        </BoxTextChat>
      </BoxChat>
    </>
  );
};

export default ChatGPT;
