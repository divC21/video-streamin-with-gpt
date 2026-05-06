import OpenAI from "openai";

const OPENAI_API_KEY =
  "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";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
