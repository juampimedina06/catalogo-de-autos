import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import NuevoProducto from "./pages/NuevoProducto";
import Stock from "./pages/Stock/Stock";
import TerminosCondiciones from "./pages/TerminosCondiciones/TerminosCondiciones";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes/PreguntasFrecuentes";
import ProductoElegido from "./pages/ProductoElegido/ProductoElegido";
import Autos from "./pages/Autos/autos";
import Login from "./pages/Login/login";
import Layout from "./layout";

function AppRoutes() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
              <Route index element={<Inicio />} />
              <Route path="/Stock" element={<Stock />} />
              <Route path="/Autos" element={<Autos />} />
              <Route path="/login" element={<Login />} />
              <Route path="/NuevoProducto" element={ <NuevoProducto /> }/>
              <Route path="producto/:id" element={<ProductoElegido />} />
              <Route path="/TerminosCondiciones" element={<TerminosCondiciones />} />
              <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
