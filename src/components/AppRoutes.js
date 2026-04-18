import { Route, Routes } from "react-router-dom";
import MainContainer from "./MainContainer";
import SignIn from "./SignIn";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<MainContainer />} /> */}
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
