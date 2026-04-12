const Button = ({ type, name, onClick, classNames }) => {
  return (
    <>
      <button
        className={
          type === "primary"
            ? `bg-purple-900 text-white px-3 py-3 m-2 rounded-md hover:bg-purple-800 w-max  text-l font-semibold ${classNames}`
            : `bg-white text-purple-900 px-3 py-3 m-2 rounded-md border border-solid border-purple-900 hover:bg-purple-100 w-max text-l font-semibold ${classNames}`
        }
        type={type}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
