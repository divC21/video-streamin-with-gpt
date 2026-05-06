const Button = ({ btnType, name, onClick, classNames, ...rest }) => {
  return (
    <>
      <button
        className={
          btnType === "primary"
            ? `bg-purple-900 text-white px-3 py-3 m-2 rounded-md hover:bg-purple-800 w-max  text-l font-semibold h-min ${classNames}`
            : `bg-white text-purple-900 px-3 py-3 m-2 rounded-md border border-solid border-purple-900 hover:bg-purple-100 w-max text-l font-semibold h-min ${classNames}`
        }
        onClick={onClick}
        {...rest}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
