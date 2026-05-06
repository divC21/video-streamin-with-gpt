import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: "dummy-key-replace-with-your-own-key",
  dangerouslyAllowBrowser: true,
});
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
