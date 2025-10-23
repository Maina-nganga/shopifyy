import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Checkout from "./Pages/Checkout";
import ThankYou from "./Pages/ThankYou";
import Account from "./Pages/Account";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
