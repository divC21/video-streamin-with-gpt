import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { openai } from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { saveTopMovies } from "../utils/askAiSlice";
import { useDispatch, useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const AskAI = () => {
  const [searchInput, setSearchInput] = useState("Top 5 movies on Netflix");

  const dispatch = useDispatch();

  const topMovies = useSelector((state) => state.askAiReducer.topMovies);

  const handleSearchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results[0];
  };
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

    let res = "Up, Don't Look Up, Bird Box, The Platform, The Adam Project";
    res = res.split(",");
    const data = res.map((item) => handleSearchMovie(item));
    const moviesArr = await Promise.all(data);
    dispatch(saveTopMovies(moviesArr));
  };
  return (
    <div className="px-6 flex flex-col w-full h-[81vh] ">
      <div className="flex">
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
      <div>
        {topMovies.length ? (
          <MoviesList title="Search results" movies={topMovies} />
        ) : null}
      </div>
    </div>
  );
};

export default AskAI;
