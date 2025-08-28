import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import PaginaBase from "./layout";
import NuevoProducto from "./pages/NuevoProducto";
import Stock from "./pages/Stock/Stock";
import TerminosCondiciones from "./pages/TerminosCondiciones/TerminosCondiciones";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes/PreguntasFrecuentes";
import ProductoElegido from "./pages/ProductoElegido/ProductoElegido";
import Login from "./pages/Login/login";

function AppRoutes() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaBase />}>
              <Route index element={<Inicio />} />
              <Route path="/Stock" element={<Stock />} />
              <Route path="/login" element={<Login />} />
              <Route path="/NuevoProducto" element={ <NuevoProducto /> }/>
              <Route path="producto/:id" element={<ProductoElegido />} />
              <Route path="/TerminosCondiciones" element={<TerminosCondiciones />} />
              <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
