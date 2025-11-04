import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

// Import das páginas
import Home from "./pages/Home/index.jsx";
import SobreNos from "./pages/SobreNos/index.jsx";
import FaleConosco from "./pages/FaleConosco/index.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;