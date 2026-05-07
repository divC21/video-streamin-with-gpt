import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { saveNowPlaying } from "../utils/movieSlice";
import { setIsLoading } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state) => state.movieReducer.nowPlaying,
  );
  const getNowPlayingMovies = async () => {
    dispatch(setIsLoading(true));
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

    let res = await fetch(url, API_OPTIONS);
    const data = await res.json();
    dispatch(saveNowPlaying(data.results));
    dispatch(setIsLoading(false));
  };
  useEffect(() => {
    if (nowPlayingMovies.length === 0) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
