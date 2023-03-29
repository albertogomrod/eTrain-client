import "./App.css";
import { Route, Routes } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

//COMPONENTS
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rutas Error */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
