import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userReducer) || {};
  const { displayName = "", photoURL = "" } = userInfo;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <header className="flex justify-between p-5 bg-gray-800  text-white">
      <span className="text-xl self-center font-fantasy italic">CHILLFLIX</span>
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
        {window.location.pathname === "/signIn" && (
          <li className="px-2 mx-1 self-center cursor-pointer">
            <Link to="/"> Sign In</Link>
          </li>
        )}
        <li className="px-2 mx-1 self-center cursor-pointer">
          <img alt="profile-picture" src={photoURL} />
        </li>
        <li className="px-2 mx-1 self-center cursor-pointer">{displayName}</li>
        <li
          className="px-2 mx-1 self-center cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </header>
  );
};

export default Header;
