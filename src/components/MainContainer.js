import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoBg from "./VideoBg";
import Card from "./Card";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movieReducer?.nowPlaying || 0,
  );
  useNowPlayingMovies();

  console.log(nowPlayingMovies);

  return (
    <div className="p-4">
      {nowPlayingMovies.length ? (
        <VideoBg info={nowPlayingMovies[0]} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MainContainer;
