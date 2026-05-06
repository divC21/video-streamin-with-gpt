import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { openai } from "../utils/openAi";

const AskAI = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleAiSearch = async () => {
    //Commenting below API call to avoid unnecessary calls to OpenAI API while developing the UI. Uncomment it when you want to test the functionality.
    /*
    const aiQuery = `Give me a list of 5 movies that are similar to ${searchInput} and are most popular and are available on Netflix. Give me comma separated list likke the example ahead : Example - Movie1, Movie 2, etc`;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: aiQuery }],
    });
    console.log(completion.choices[0].message?.content);
     */
  };
  return (
    <div className="px-6 flex w-full h-[81vh] ">
      <div className="w-1/2 py-3 items-end">
        <Input
          value={searchInput}
          placeholder="Ask me anything about movies."
          onChange={(evt) => {
            setSearchInput(evt.target.value);
          }}
        />
      </div>
      <Button btnType="primary" name="Search" onClick={handleAiSearch} />
    </div>
  );
};

export default AskAI;
