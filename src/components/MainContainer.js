import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { saveNowPlaying } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state) => state.movieReducer.nowPlaying,
  );
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

  console.log(nowPlayingMovies);

  return (
    <div className="p-4">
      <h2>sgjgha</h2>
    </div>
  );
};

export default MainContainer;
