import FormularioNuevoProducto from "../../components/FormularioNuevoProducto/FormularioNuevoProducto";
import styles from "./NuevoProducto.module.css";
import servicioProductos from "../../services/productos";
import { useForm } from "../../hooks/useForm";
import { ProductoType } from "../../types/ProductoType";
import Notificacion from "../../components/Notificacion/Notificacion";
import { useState } from "react";



const NuevoProducto = () => {
  const [mensaje, setMensaje] = useState<string | null>(null)

  const {
    handleChange,
    nombre,
    categoria,
    precio,
    modelo,
    kilometros,
    motor,
    version,
    combustible,
    equipamiento,
    descripcion,
    imagenes,
    datos_externos,
    cubiertas,
    caja,
  } = useForm<ProductoType>({
    nombre: "",
    categoria: "",
    precio: "",
    modelo: 0,
    kilometros: "",
    motor: "",
    version: "",
    combustible: "",
    equipamiento: "",
    descripcion: "",
    imagenes: [], 
    datos_externos: [],
    cubiertas: true,
    caja: "",
  });

  const subirProducto = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevoAuto = {
      nombre,
      categoria,
      precio,
      modelo,
      kilometros,
      motor,
      version,
      combustible,
      equipamiento,
      descripcion,
      imagenes,
      datos_externos,
      cubiertas,
      caja,
    };

    servicioProductos
      .crear(nuevoAuto)
      .then((respuesta) => {
        console.log("producto subido con exito", respuesta);
        setMensaje("Producto subido con exito")
        setTimeout(() =>{
          setMensaje(null)
          window.location.href = "/Stock";
        },1000)
      })
      .catch((error) => {
        console.log("error al subir el producto", error);
        setMensaje("No se pudo subir el producto")
        setTimeout(() =>{
          setMensaje(null)
        },1000)
      });
  };

  return (
    <section className={styles.contenedor}>
      <h2>Subir Auto</h2>
      <div className={styles.contenedor_formulario}>
        <FormularioNuevoProducto
          onSubmit={subirProducto}
          onChange={handleChange}
          nombre={nombre}
          categoria={categoria}
          precio={precio}
          modelo={modelo}
          kilometros={kilometros}
          motor={motor}
          version={version}
          combustible={combustible}
          equipamiento={equipamiento}
          descripcion={descripcion}
          imagenes={imagenes} 
          datos_externos={datos_externos} 
          cubiertas={cubiertas}
          caja={caja}
        />
      </div>
      <Notificacion mensaje={mensaje} clase={mensaje ? "Correcta" : "incorrecta"} />
    </section>
  );
};

export default NuevoProducto;
