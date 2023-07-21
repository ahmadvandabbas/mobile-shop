import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Cart from "./components/Cart";

import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
