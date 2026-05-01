const Card = ({ poster }) => {
  return (
    <div className="min-w-56 min-h-32 p-2">
      <img className="w-full h-full" src={poster} alt="poster_img" />
    </div>
  );
};

export default Card;
