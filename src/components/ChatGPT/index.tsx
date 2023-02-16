import { DivTitle, Title } from "../../styles/Aboutme";
import chatgpt from "../../assets/chatgpt-icon.svg";
import { useEffect, useState } from "react";
import {
  BoxChat,
  BoxConversation,
  BoxTextChat,
  ButtonChat,
  FormChat,
  FromText,
  InputChat,
  TextConversation,
} from "../../styles/Chatgpt";
import createCompletionChatGTP from "../../API/chatgpt";

const ChatGPT = () => {
  const [message, setMessage] = useState("");
  const [update, setUpdate] = useState(false);
  const [chat, setChat] = useState([]);

  const dateNow = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
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
    await createCompletionChatGTP(message);
    setMessage("");
    setUpdate(!update);
  };

  useEffect(() => {
    handleGetChat();
  }, [update]);

  return (
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
                  {chat.from} {dateNow()}
                </FromText>
                <TextConversation color={chat.from}>
                  {chat.messages}
                </TextConversation>
              </BoxConversation>
            ))
          : null}
        <FormChat onSubmit={handleSubmit}>
          <InputChat
            placeholder="Write your question here"
            onChange={handleInputChange}
            type="text"
            value={message}
            required={true}
            maxLength={100}
          />
          <ButtonChat type="submit">Send</ButtonChat>
        </FormChat>
      </BoxTextChat>
    </BoxChat>
  );
};

export default ChatGPT;
