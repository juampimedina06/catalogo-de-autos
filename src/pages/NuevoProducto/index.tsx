import FormularioNuevoProducto from "../../components/FormularioNuevoProducto/FormularioNuevoProducto";
import styles from "./NuevoProducto.module.css";
import servicioProductos from "../../services/productos"
import { useForm } from "../../hooks/useForm";

interface FormData{
    nombreProducto:string;
    precioProducto:number;
    fechaProducto:string;
    codigoProducto:string;
    descripcionProducto:string
    categoriaProducto:string;
    cantidadProducto:number;
    imagenPrincipal:string;
}

const NuevoProducto = () => {

  const {handleChange, nombreProducto, precioProducto,fechaProducto,codigoProducto,descripcionProducto,categoriaProducto,cantidadProducto,imagenPrincipal} = useForm<FormData>({
    nombreProducto:"",
    precioProducto:0,
    fechaProducto:"",
    codigoProducto:"",
    descripcionProducto:"",
    categoriaProducto:"",
    cantidadProducto:0,
    imagenPrincipal:""
  })

  const subirProducto = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nuevoProducto = {
      nombre: nombreProducto,
      precio: precioProducto,
      fecha: fechaProducto,
      codigo: codigoProducto,
      descripcion: descripcionProducto,
      categoria: categoriaProducto,
      cantidad: cantidadProducto,
      imagen: imagenPrincipal
    }

    servicioProductos
      .crear(nuevoProducto)
      .then((respuesta)=>{
        console.log("producto subido con exito", respuesta)
        //Usar componente de notificacion.
        window.location.href = "/";
      })
      .catch((error)=>{
        console.log("error al subir el producto", error)
      })
  }

  return (
    <section className={styles.contenedor}>
        <h2>Subir Producto</h2>
        <div className={styles.contenedor_formulario}>
          <FormularioNuevoProducto 
            onSubmit={subirProducto}
            onChange={handleChange}
            nameNombre="nombreProducto" valueNombre={nombreProducto}
            namePrecio="precioProducto" valuePrecio={precioProducto}
            nameFecha="fechaProducto" valueFecha={fechaProducto}
            nameCodigo="codigoProducto" valueCodigo={codigoProducto}
            nameDescripcion="descripcionProducto" valueDescripcion={descripcionProducto}
            nameCategoria="categoriaProducto" valueCategoria={categoriaProducto}
            nameCantidad="cantidadProducto" valueCantidad={cantidadProducto}
            nameImagenPrincipal="imagenPrincipal" valueImagenPrincipal={imagenPrincipal}
          />
        </div>
    </section>
  )
}


export default NuevoProducto;
