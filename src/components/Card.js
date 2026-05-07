const Card = ({ poster }) => {
  return (
    <div className="sm:min-w-56 sm:min-h-32 min-w-40 min-h-32 p-2 border border-transparent hover:hover:scale-110 duration-300 transition-transform">
      <img className="w-full h-full" src={poster} alt="poster_img" />
    </div>
  );
};

export default Card;
