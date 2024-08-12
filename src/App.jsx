import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import Myabout from "./Components/About/Myabout";
import Myapp from "./Components/Home/Myapp";
import MyShop from "./Components/Shop/MyShop";
import MyContact from "./Components/Contact/MyContact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Myapp />} />
        <Route path="/about" element={<Myabout />} />
        <Route path="/shop" element={<MyShop />} />
        <Route path="/contact" element={<MyContact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
