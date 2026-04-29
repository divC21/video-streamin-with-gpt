import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { saveNowPlaying } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

    let res = await fetch(url, API_OPTIONS);
    const data = await res.json();
    dispatch(saveNowPlaying(data.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
