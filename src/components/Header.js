import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <header className="flex justify-between p-5 bg-gray-800  text-white">
      <span className="text-xl font-bold self-center">"LOGO"</span>
      <ul className="flex justify-end w-2/3">
        <li className="x-2 mx-1 w-1/2">
          <Input
            value={searchInput}
            placeholder="Search for movies, shows, etc..."
            onChange={(evt) => {
              setSearchInput(evt.target.value);
            }}
          />
        </li>
        <li className="px-2 mx-1 self-center">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 mx-1 self-center">
          <Link to="/signin">&copy; Sign In</Link>
        </li>
        <li className="px-2 mx-1 self-center">Logout</li>
      </ul>
    </header>
  );
};

export default Header;
