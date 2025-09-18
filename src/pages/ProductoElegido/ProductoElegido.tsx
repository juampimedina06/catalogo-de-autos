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
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';



import Producto from "../../components/Producto/Producto";
import { autosPage } from "../../types/autosType";

const ProductoElegido = () => {
  const { id } = useParams<{ id: string }>();
  const [todosLosProductos, setTodosLosProductos] = useState<autosPage[]>([]);
  const [productosCategoria, setProductosCategoria] = useState<autosPage[]>([]);
  const [productoElegido, setProductoElegido] = useState<ProductoType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
  if (!id) return;
  setLoading(true);

  ServicioProducto.obtenerPorId(Number(id))
    .then((producto) => {
      setProductoElegido(producto);
    })
    .finally(() => setLoading(false));

  ServicioProducto.obtener()
    .then((productos) => setTodosLosProductos(productos));

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

  console.log(productoElegido)

  const estadoCubiertas = () => {
    if (productoElegido.cubiertas) {
      return <p className={styles.description}>4 cubiertas nuevas</p>;
    }
  };
  const mensajeWsp = `Hola leandro! Me interesa el auto: ${productoElegido.nombre}`;
  const linkWsp = `https://wa.me/543516598216?text=${encodeURIComponent(mensajeWsp)}`;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.productContainer}>
        <div className={styles.gallery}>
        {productoElegido.imagenes.slice(1, 14).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Vista ${index + 1}`}
            className={styles.thumbnail}
          />
        ))}
        </div>
        <div className={styles.contenedor_imagen_principal}>
          <Swiper className={styles.swiper_imagenes}>
            {productoElegido.imagenes.map((img,index) =>(
                <SwiperSlide className={styles.swiper_imagen}>
                <img
                  key={index}
                  src={img}
                  alt={productoElegido.nombre}
                  className={styles.image}
                  />
            </SwiperSlide>
            ))}
          </Swiper>
          
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
          <p className={styles.description}>Equipamiento: {productoElegido.equipamiento}</p>
          <p className={styles.description}>{productoElegido.descripcion}</p>
        </div>
      </div>

      <div className={styles.contenedor_otros_autos}>
        <Titulo titulo={`Otros autos ${productoElegido.categoria}`} />
        {productosCategoria.length === 0 ? (
          <p className={styles.parrafo_sin_productos}>Solo tenemos ese auto de la marca {productoElegido.categoria}</p>
          ) : (
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className={styles.swyper}
            >
        {productosCategoria.map((producto) => (
          <SwiperSlide className={styles.swiperslide} key={producto.id}>
            <Link to={`/producto/${producto.id}`}>
              <Producto {...producto} />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  )}
</div>



    </div>
  );
};

export default ProductoElegido;


