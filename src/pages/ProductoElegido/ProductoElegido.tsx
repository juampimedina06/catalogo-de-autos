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

interface ProductoElegido {
  id:number;
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
  const [todosLosProductos, setTodosLosProductos] = useState<ProductoType[]>([])
  const [productosCategoria, setProductosCategoria] = useState<ProductoType[]>([]);
  const [productoElegido, setProductoElegido] = useState<ProductoElegido | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`https://67c6be3c351c081993fe9984.mockapi.io/productos/producto/${id}`)
      .then((res) => res.json())
      .then((data : ProductoElegido ) => {
        setProductoElegido(data);
        setLoading(false);
      });

      ServicioProducto
      .obtener()
      .then((response : ProductoType[]) => {
        setTodosLosProductos(response)
      })
  }, [id]);

  useEffect(() => {
    if (productoElegido && todosLosProductos.length > 0) {
      const autosCategoria = todosLosProductos.filter(
        (auto) => auto.categoria === productoElegido.categoria
      );
      setProductosCategoria(autosCategoria);
      console.log("Filtrados:", autosCategoria);
    }
  }, [productoElegido, todosLosProductos]);


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



