import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoBg from "./VideoBg";
import Card from "./Card";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movieReducer?.nowPlaying || [],
  );
  useNowPlayingMovies();

  console.log(nowPlayingMovies);

  return (
    <div className="">
      {nowPlayingMovies.length ? (
        <VideoBg
          title={nowPlayingMovies[0].original_title}
          desc={nowPlayingMovies[0].overview}
          movieId={nowPlayingMovies[0].id}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MainContainer;
