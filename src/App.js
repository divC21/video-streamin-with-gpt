import Header from "./components/Header";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  return (
    <div className="">
      <Header />
      <div className="w-full h-[calc(100vh-120px)] bg-opacity-30 text-white bg-gradient-to-b from-purple-900 to-purple-100">
        {!isLoading ? <AppRoutes /> : <Loader />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
