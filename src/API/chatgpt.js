const { Configuration, OpenAIApi } = require("openai");
const apiKey = process.env.REACT_APP_API_KEY;

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const dateNow = () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const saveChatLocal = (user, response) => {
  let messages = localStorage.getItem("chat") || [];

  if (messages.length > 0) {
    messages = JSON.parse(messages);
  }

  messages.push({
    from: "user",
    messages: user,
    date: dateNow(),
  });

  messages.push({
    from: "chatgpt",
    messages: response,
    date: dateNow(),
  });
  
  localStorage.setItem("chat", JSON.stringify(messages));
};

async function createCompletionChatGTP(message) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 2048,
    temperature: 0,
  });
  saveChatLocal(
    message,
    response.data.choices[0].text.slice(2, response.data.choices[0].text.length)
  );
  return response;
}

export default createCompletionChatGTP
