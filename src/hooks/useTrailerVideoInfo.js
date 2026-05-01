import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { saveTrailerInfo } from "../utils/movieSlice";

const useTrailerVideoInfo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const res = await data.json();
    if (res.results && res.results.length) {
      const trailer = res.results.filter((item) => item.type === "Trailer");
      dispatch(saveTrailerInfo(trailer.length ? trailer[0] : res.results[0]));
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailerVideoInfo;
