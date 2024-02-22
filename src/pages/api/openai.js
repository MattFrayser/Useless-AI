import OpenAI from 'openai';
import { predefinedPrompt } from './prompt';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



export default async function handler(req, res) {
  const { prompt } = req.body;
  const  aiPrompt = predefinedPrompt;

  try {
    const result = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: prompt},
        { role: 'system', content: aiPrompt}
      ],
      max_tokens: 150,
      stop: null,
      n: 1,
      temperature: 0.5,
    });
    const responceText = result.choices[0].message.content;
    console.log(responceText);
    res.status(200).json( responceText );

  } catch (error) {
    console.error('Error in API:', error);
    res.status(500).json({ message: 'An error occurred while processing the request.', error: error.message });
  }
}