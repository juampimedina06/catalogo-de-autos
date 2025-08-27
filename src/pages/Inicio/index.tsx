import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import styles from "./index.module.css";
import Titulo from '../../components/Titulo';
import Producto from '../../components/Producto/Producto';
import CirculoCargar from '../../components/CirculoCargar/CirculoCargar';
import BarraBusqueda from '../../components/BarraBusqueda/BarraBusqueda';
import ElementoNoEncontrado from '../../components/ElementoNoEncontrado/ElementoNoEncontrado';
import BotonCategoria from '../../components/BotonCategoria';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import servicioProducto from "../../services/productos"
import type { ProductoType } from '../../types/ProductoType';

import type { SelectChangeEvent } from '@mui/material/Select';


interface FormData{
  filtrador:string;
  categoriaSeleccionada:string;
}

const Inicio = () => {
  const [producto, setProducto] = useState<ProductoType[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { handleChange, filtrador, categoriaSeleccionada } = useForm<FormData>({
    filtrador: "",
    categoriaSeleccionada: "",
  });

  const handleCategoriaChange = (event: SelectChangeEvent<string>) => {
  const fakeEvent = {
    target: {
      name: "categoriaSeleccionada",
      value: event.target.value,
    },
  } as React.ChangeEvent<HTMLInputElement>;

  handleChange(fakeEvent);
};

  useEffect(() => {
    servicioProducto
      .obtener()
      .then((response: ProductoType[]) => {
        setProducto(response);
        setLoading(false);
        const categoriasUnicas = [...new Set(response.map(p => p.categoria))];
        setCategorias(categoriasUnicas);
      });
  }, []);

  const filtrarProductos = producto.filter((producto) =>
    producto.nombre.toLowerCase().includes(filtrador.toLowerCase()) &&
    (categoriaSeleccionada === '' || producto.categoria === categoriaSeleccionada)
  );

  if (loading) {
    return <CirculoCargar />;
  }

  return (
    <>
      <Banner />
      <section className={styles.contenedor_buscador}>
        <div className={styles.contenedor_titulo}>
          <Titulo titulo="¡Oportunidades únicas!" />
        </div>
        <div className={styles.contenedor_buscadores}>
          <BarraBusqueda
            placeholder="Buscar producto"
            name="filtrador"
            value={filtrador}
            onChange={handleChange}
          />
          <BotonCategoria
            name="categoria"
            value={categoriaSeleccionada}
            handleChange={handleCategoriaChange}
            categorias={categorias}
          />
        </div>
      </section>

      <section className={styles.contenedor_producto}>
        {categoriaSeleccionada.length === 0 ? null : (
          <Titulo titulo={categoriaSeleccionada} />
        )}

        <div className={styles.producto}>
          {filtrarProductos.length === 0 ? (
            <ElementoNoEncontrado tipoDato="Nombre" />
          ) : (
            filtrarProductos.map((producto) => (
              <Link to={`producto/${producto.id}`} key={producto.id}>
                <Producto {...producto} />
              </Link>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Inicio;
