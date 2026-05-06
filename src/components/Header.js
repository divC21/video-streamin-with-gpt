import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { toggleAskAiView } from "../utils/askAiSlice";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userReducer) || {};
  const { displayName = "", photoURL = "" } = userInfo;
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleAskAI = () => {
    dispatch(toggleAskAiView());
  };
  return (
    <header className="flex justify-between p-5 bg-gray-800  text-white">
      <span className="text-xl self-center font-mono">✨MagixPlay✨</span>
      {Object.keys(userInfo).length ? (
        <ul className="flex justify-end w-2/3">
          <li className="x-2 mx-1 w-1/2 self-center">
            <Input
              value={searchInput}
              placeholder="Search for movies, shows, etc..."
              onChange={(evt) => {
                setSearchInput(evt.target.value);
              }}
            />
          </li>
          <li className="px-2 mx-1 self-center">
            <Button btnType="primary" name="ASK AI" onClick={handleAskAI} />
          </li>
          {window.location.pathname === "/signIn" && (
            <li className="px-2 mx-1 self-center cursor-pointer">
              <Link to="/"> Sign In</Link>
            </li>
          )}
          <li className="px-2 mx-1 self-center cursor-pointer">
            <span className="text-3xl">👩🏻</span>
          </li>
          <li className="px-2 mx-1 self-center cursor-pointer">
            {displayName}
          </li>
          <li
            className="px-2 mx-1 self-center cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      ) : null}
    </header>
  );
};

export default Header;
