import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CirculoCargar from "../../components/CirculoCargar/CirculoCargar";
import styles from "./ProductoElegido.module.css";

interface ProductoElegido {
  nombre: string;
  imagen: string;
  imagen_one: string;
  imagen_two: string;
  imagen_three: string;
  imagen_four: string;
  descripcion: string;
  categoria: string;
  precio: string;
}

const ProductoElegido = () => {
  const {id} = useParams<string>();
  const [productoElegido, setProductoElegido] = useState<ProductoElegido | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`https://67c6be3c351c081993fe9984.mockapi.io/productos/producto/${id}`)
      .then((res) => res.json())
      .then((data : ProductoElegido ) => {
        setProductoElegido(data);
        setLoading(false);
      });
  }, [id]);

  // if (loading) return <CirculoCargar />;
  if (loading || !productoElegido) return <CirculoCargar />;


  const mensajeWsp = `Hola! Quiero encargar el producto: ${productoElegido.nombre}`;
  const linkWsp = `https://wa.me/543516598216?text=${encodeURIComponent(mensajeWsp)}`;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.productContainer}>
        <div className={styles.gallery}>
  <img
    src={productoElegido.imagen_one}
    alt="Vista 1"
    className={styles.thumbnail}
  />
  <img
    src={productoElegido.imagen_two}
    alt="Vista 2"
    className={styles.thumbnail}
  />
  <img
    src={productoElegido.imagen_three}
    alt="Vista 3"
    className={styles.thumbnail}
  />
  <img
    src={productoElegido.imagen_four}
    alt="Vista 4"
    className={styles.thumbnail}
  />
</div>
        <div className={styles.imageWrapper}>
          <img
            src={productoElegido.imagen}
            alt={productoElegido.nombre}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <p className={styles.breadcrumbs}>Inicio &gt; Categoría &gt; {productoElegido.categoria}</p>
          <h1 className={styles.title}>{productoElegido.nombre}</h1>
          <p className={styles.price}>${productoElegido.precio}</p>
          <p className={styles.delivery}>Entrega todos los viernes</p>
          <p className={styles.description}>{productoElegido.descripcion}</p>
          <div className={styles.actions}>
            <a
              href={linkWsp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              Encargar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoElegido;
