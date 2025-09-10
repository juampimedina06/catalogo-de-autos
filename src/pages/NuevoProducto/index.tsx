import FormularioNuevoProducto from "../../components/FormularioNuevoProducto/FormularioNuevoProducto";
import styles from "./NuevoProducto.module.css";
import servicioProductos from "../../services/productos";
import { useForm } from "../../hooks/useForm";

interface FormAuto {
  nombre: string;
  categoria: string;
  precio: number;
  modelo: number;
  kilometros: number;
  motor: string;
  version: string;
  combustible: string;
  equipamiento: string;
  descripcion: string;
  imagenes: string[]; 
  datos_externos: string[]; 
  cubiertas: boolean;
  caja: string;
}

const NuevoProducto = () => {
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
  } = useForm<FormAuto>({
    nombre: "",
    categoria: "",
    precio: 0,
    modelo: 0,
    kilometros: 0,
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
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("error al subir el producto", error);
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
    </section>
  );
};

export default NuevoProducto;
