import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import styles from "./index.module.css";
import Titulo from '../../components/Titulo';
import Producto from '../../components/Producto/Producto';
import CirculoCargar from '../../components/CirculoCargar/CirculoCargar';
import ElementoNoEncontrado from '../../components/ElementoNoEncontrado/ElementoNoEncontrado';
import { Link } from 'react-router-dom';
import servicioProducto from "../../services/productos"
import type { ProductoType } from '../../types/ProductoType';

const Inicio = () => {
  const [producto, setProducto] = useState<ProductoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    servicioProducto
      .obtener()
      .then((response: ProductoType[]) => {
        setProducto(response);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CirculoCargar />;
  }

  return (
    <>
      <Banner />
      <section className={styles.contenedor_producto}>
        <Titulo titulo="¡Oportunidades únicas!" />
        <div className={styles.producto}>
          {producto.length === 0 ? (
            <ElementoNoEncontrado tipoDato="Nombre" />
          ) : (
            producto.map((producto) => (
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
