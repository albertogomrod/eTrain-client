import "./App.css";
import { Route, Routes } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

import Blog from "./pages/Info/Blog";
import Contacto from "./pages/Info/Contacto";
import EtrainPage from "./pages/Info/EtrainPage";
import Servicios from "./pages/Info/Servicios";

import BlogCreate from "./pages/Blog/BlogCreate";

//COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/que-es-etrain" element={<EtrainPage />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Rutas Admin */}
        <Route path="/nuevo-blog" element={<BlogCreate />} />

        {/* Rutas Error */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
