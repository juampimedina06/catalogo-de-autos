import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CirculoCargar from "../../components/CirculoCargar/CirculoCargar";
import styles from "./ProductoElegido.module.css";
import ServicioProducto from '../../services/productos'
import { ProductoType } from "../../types/ProductoType";

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
  const [productosCategoria, setProductosCategoria] = useState([]);
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

  


  if (loading || !productoElegido) return <CirculoCargar />;


  const mensajeWsp = `Hola! Quiero encargar el producto: ${productoElegido.nombre}`;
  const linkWsp = `https://wa.me/543516598216?text=${encodeURIComponent(mensajeWsp)}`;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.productContainer}>
        <div className={styles.gallery}>
  <img
    src="https://landinginteligente.com/fotos/CatalogoUsados/deconcesionarias--2023-6-14--15-28-41/31963200-a857-4f6d-a9c3-c7e5bd9f7b98.jpg"
    alt="Vista 1"
    className={styles.thumbnail}
  />
  <img
    src="https://landinginteligente.com/fotos/CatalogoUsados/deconcesionarias--2023-6-14--15-28-41/31963200-a857-4f6d-a9c3-c7e5bd9f7b98.jpg"
    alt="Vista 2"
    className={styles.thumbnail}
  />
  <img
    src="https://landinginteligente.com/fotos/CatalogoUsados/deconcesionarias--2023-6-14--15-28-41/31963200-a857-4f6d-a9c3-c7e5bd9f7b98.jpg"
    alt="Vista 3"
    className={styles.thumbnail}
  />
  <img
    src="https://landinginteligente.com/fotos/CatalogoUsados/deconcesionarias--2023-6-14--15-28-41/31963200-a857-4f6d-a9c3-c7e5bd9f7b98.jpg"
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
          
          <div>
            <h1 className={styles.title}>{productoElegido.nombre}</h1>
            <p className={styles.price}>${productoElegido.precio}</p>
          </div>
          <a
              href={linkWsp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              Consultar por WhatsApp
            </a>
          <div className={styles.actions}>
            <p className={styles.description}>Ford Focus modelo 2018. 103.000 kilometros</p>
            <p className={styles.description}>Motor 2.0 Narta</p>
            <p className={styles.description}>Version: Se plus</p>
            <p className={styles.description}>Caja manual</p> 
            <p className={styles.description}>4 cubiertas nuevas</p>
          </div>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod id! Eaque voluptate aliquid fugit, tenetur maiores magnam eius iusto, at ullam dolorem corrupti repellat molestiae nulla quaerat nobis. Distinctio.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductoElegido;
