import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Architecture from "./pages/Architecture";
import Trust from "./pages/Trust";
import Deities from "./pages/Deities";
import DeityDetail from "./pages/DeityDetail";
import Festivals from "./pages/Festivals";
// import Calendar from "./pages/Calendar";
import Pooja from "./pages/Pooja";
import VisitorInfo from "./pages/VisitorInfo";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import News from "./pages/News";
// import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/architecture" element={<Architecture />} />
            <Route path="/about/trust" element={<Trust />} />
            <Route path="/deities" element={<Deities />} />
            <Route path="/deities/:id" element={<DeityDetail />} />
            <Route path="/festivals" element={<Festivals />} />
            {/* <Route path="/festivals/calendar" element={<Calendar />} /> */}
            <Route path="/pooja" element={<Pooja />} />
            <Route path="/visitor-info" element={<VisitorInfo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/news" element={<News />} />
            {/* <Route path="/news/:id" element={<NewsDetail />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
