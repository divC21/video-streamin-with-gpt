import Header from "./components/Header";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <div className="w-full  bg-purple-600 bg-opacity-30 text-white h-screen bg-gradient-to-b from-purple-900 to-purple-100">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
