import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import MainContainer from "./MainContainer";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("./browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route path="/browse" element={<MainContainer />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
