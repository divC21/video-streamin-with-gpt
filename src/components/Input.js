const Input = ({
  type = "text",
  placeholder = "",
  onChange,
  value,
  ...rest
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        {...rest}
      />
    </div>
  );
};

export default Input;
