import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CirculoCargar from "../../components/CirculoCargar/CirculoCargar";
import styles from "./ProductoElegido.module.css";
import ServicioProducto from '../../services/productos'
import { ProductoType } from "../../types/ProductoType";
import Titulo from "../../components/Titulo";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import Producto from "../../components/Producto/Producto";

const ProductoElegido = () => {
  const { id } = useParams<{ id: string }>();
  const [todosLosProductos, setTodosLosProductos] = useState<ProductoType[]>([]);
  const [productosCategoria, setProductosCategoria] = useState<ProductoType[]>([]);
  const [productoElegido, setProductoElegido] = useState<ProductoType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducto = async () => {
      if (!id) return;
      setLoading(true);

      // 🔹 Traer producto por ID desde Firestore
      const data = await ServicioProducto.obtenerPorId(id);
      setProductoElegido(data);

      // 🔹 Traer todos para sugerencias
      const response = await ServicioProducto.obtener();
      setTodosLosProductos(response);

      setLoading(false);
    };

    fetchProducto();
  }, [id]);

  useEffect(() => {
    if (productoElegido && todosLosProductos.length > 0) {
      const autosCategoria = todosLosProductos.filter(
        (auto) => auto.categoria === productoElegido.categoria && auto.id !== productoElegido.id
      );
      setProductosCategoria(autosCategoria);
    }
  }, [productoElegido, todosLosProductos]);

  if (loading || !productoElegido) return <CirculoCargar />;

  const estadoCubiertas = () => {
    if (productoElegido.cubiertas) {
      return <p className={styles.description}>4 cubiertas nuevas</p>;
    }
  };
  const mensajeWsp = `Hola! Quiero encargar el auto: ${productoElegido.nombre}`;
  const linkWsp = `https://wa.me/543516598216?text=${encodeURIComponent(mensajeWsp)}`;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.productContainer}>
        <div className={styles.gallery}>
          <img
            src={productoElegido.imagenes[1]}
            alt="Vista 1"
            className={styles.thumbnail}
          />
          <img
            src={productoElegido.imagenes[2]}
            alt="Vista 2"
            className={styles.thumbnail}
          />
          <img
            src={productoElegido.imagenes[3]}
            alt="Vista 3"
            className={styles.thumbnail}
          />
          <img
            src={productoElegido.imagenes[4]}
            alt="Vista 4"
            className={styles.thumbnail}
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={productoElegido.imagenes[0]}
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
            <p className={styles.description}>{productoElegido.nombre} modelo {productoElegido.modelo}. {productoElegido.kilometros} kilometros</p>
            <p className={styles.description}>Motor {productoElegido.motor} {productoElegido.combustible}</p>
            <p className={styles.description}>Version: {productoElegido.version}</p>
            <p className={styles.description}>{productoElegido.caja}</p> 
            {estadoCubiertas()}
          </div>
          <p className={styles.description}>{productoElegido.descripcion}</p>
        </div>
      </div>
      <div className={styles.contenedor_otros_autos}>
        <Titulo titulo={`Otros autos ${productoElegido.categoria}`} />
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className={styles.swiper}
      >
        {productosCategoria.length === 0 ? (
          <p>Solo tenemos ese auto de la marca {productoElegido.categoria} </p>
        ) : (
          productosCategoria.map((producto) => (
                <SwiperSlide className={styles.swiperslide}>
                  <Link to={`/producto/${producto.id}`} key={producto.id}>
                    <Producto {...producto} />
                  </Link>
                </SwiperSlide>
            ))
        )} 
      </Swiper>
      </div>
    </div>
  );
};

export default ProductoElegido;



