import { useEffect, useState } from 'react';
import styles from '../Autos/autos.module.css'
import Titulo from '../../components/Titulo';
import Producto from '../../components/Producto/Producto';
import CirculoCargar from '../../components/CirculoCargar/CirculoCargar';
import BarraBusqueda from '../../components/BarraBusqueda/BarraBusqueda';
import ElementoNoEncontrado from '../../components/ElementoNoEncontrado/ElementoNoEncontrado';
import BotonCategoria from '../../components/BotonCategoria';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import servicioProducto from "../../services/productos"
import type { autosPage } from '../../types/autosType';

import type { SelectChangeEvent } from '@mui/material/Select';


interface FormData{
  filtrador:string;
  categoriaSeleccionada:string;
}

const Autos = () => {
  const [producto, setProducto] = useState<autosPage[]>([]);
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
      .then((response) => {
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

  console.log("Seccion autos:",filtrarProductos)

  if (loading) {
    return <CirculoCargar />;
  }

  return (
    <div className={styles.contenedor_autos}>
      <section className={styles.contenedor_buscador}>
        <div className={styles.contenedor_buscadores}>
          <BarraBusqueda
            placeholder="Nombre del auto"
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
              <Link to={`/producto/${producto.id}`} key={producto.id}>
                <Producto {...producto} />
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Autos;
