const { Configuration, OpenAIApi } = require("openai");
const apiKey = require("../apiKey/apiKey");
const configuration = new Configuration({
  apiKey: apiKey,
});

const askGPT = async (messages) => {
  const openai = new OpenAIApi(configuration);
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0.7,
  });
  const response = chatCompletion.data.choices[0].message;
  const content = response.content;
  const contentObject = JSON.parse(content);
  console.log(contentObject);
  return contentObject;
};

module.exports = askGPT;

/*https://github.com/openai/openai-node*/
