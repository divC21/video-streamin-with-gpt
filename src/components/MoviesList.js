import { POSTER_IMAGE_URL } from "../utils/constants";
import Card from "./Card";

const MoviesList = ({ title, movies }) => {
  return (
    <div className=" text-white">
      <div className="p-4">
        <h1 className="text-2xl">{title}</h1>
      </div>
      <div className="flex overflow-auto">
        {movies.length ? (
          movies.map((item) => (
            <Card poster={`${POSTER_IMAGE_URL}${item.poster_path}`} />
          ))
        ) : (
          <p>No Movies to show</p>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
