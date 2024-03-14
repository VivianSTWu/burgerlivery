import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hamburgers from "./pages/Hamburgers/Hamburgers";
import Appetizers from "./pages/Entradinhas/Entradinhas";
import Beverages from "./pages/Bebidas/Bebidas";
import Combos from "./pages/Combos/Combos";
import Desserts from "./pages/Sobremesas/Sobremesas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
        <Route path="/entradinhas" element={<Appetizers />} />
        <Route path="/bebidas" element={<Beverages />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/sobremesas" element={<Desserts />} />
      </Routes>
    </BrowserRouter>
  );
}
