import useTrailerVideoInfo from "../hooks/useTrailerVideoInfo";
import Button from "./Button";
import { useSelector } from "react-redux";

const VideoBg = ({ title = "", desc = "", movieId }) => {
  const trailerInfo = useSelector((state) => state.movieReducer.trailer);
  useTrailerVideoInfo(movieId);
  return (
    <div>
      <div className="absolute pt-80 px-16 z-10">
        <h1 className="text-6xl py-6">{title}</h1>
        <p className="py-6 w-1/2">{desc}</p>
        <div>
          <Button classNames="" btnType="primary" name="Play Now" />
          <Button classNames="" btnType="secondary" name="More Info" />
        </div>
      </div>
      <div className="w-screen pointer-events-none">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerInfo.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};
export default VideoBg;
