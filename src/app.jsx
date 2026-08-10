import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Discord from "./pages/Discord";
import Home from "./pages/Home";
import Join from "./pages/Join";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navbar />

        <main className="container mx-auto flex-1 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
