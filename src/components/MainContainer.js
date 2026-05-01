import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoBg from "./VideoBg";
import MoviesList from "./MoviesList";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movieReducer?.nowPlaying || [],
  );
  useNowPlayingMovies();

  console.log(nowPlayingMovies);

  return (
    <div>
      {nowPlayingMovies.length ? (
        <VideoBg
          title={nowPlayingMovies[0].original_title}
          desc={nowPlayingMovies[0].overview}
          movieId={nowPlayingMovies[0].id}
        />
      ) : (
        <div>Loading...</div>
      )}
      <div className="-mt-64 bg-black">
        <MoviesList title="Now Playing" movies={nowPlayingMovies} />
        <MoviesList title="Trending" movies={nowPlayingMovies} />
        <MoviesList title="Top Rated" movies={nowPlayingMovies} />
        <MoviesList title="Award Winning" movies={nowPlayingMovies} />
        <MoviesList title="Comedy" movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default MainContainer;
