import OpenAI from "openai";

const OPENAI_API_KEY = "dummy-key-replace-with-your-own-key";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
