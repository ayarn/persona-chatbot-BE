const OpenAI = require("openai");
const { systemPrompt } = require("../prompts/systemPrompt");

const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: process.env.GEMINI_BASEURL,
});

const messages = [{ role: "system", content: systemPrompt }];

const Persona = async (req, res) => {
  try {
    const { userMessage } = req.body;

    messages.push({ role: "user", content: userMessage });

    const response = await openai.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: messages,
      temperature: 0.7,
    });

    const reply = response.choices[0].message.content;

    messages.push({ role: "assistant", content: reply });

    return res.status(200).json({
      success: true,
      message: "",
      data: {
        reply: reply,
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = Persona;
