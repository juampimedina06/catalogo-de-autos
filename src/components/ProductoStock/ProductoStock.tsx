import { useState } from 'react'
import InformacionProducto from './InformacionProducto'
import styles from './ProductoStock.module.css'
import FormularioStock from '../FormularioStock/FormularioStock'
import servicioProducto from "../../services/productos"
import { useForm } from "../../hooks/useForm";
import { ProductoType } from '../../types/ProductoType'

interface FormData{
  nuevoCodigo:string;
  nuevoNombre:string;
  nuevaCantidad:number; 
  nuevaCategoria:string; 
  nuevoPrecio:number;
}

interface PropsProductoStock {
  filtrarProductos: ProductoType[];
  actualizarProductoEstado: (actualizar: (productosPrevios: ProductoType[]) => ProductoType[]) => void;
  eliminarProductoEstado: (eliminar: (productosPrevios: ProductoType[]) => ProductoType[]) => void;
  mensajeNotificacion: (mensaje: string) => void;
  tipoNotificacion: (tipo: string | null) => void;
}

const ProductoStock = ({filtrarProductos, actualizarProductoEstado,eliminarProductoEstado, mensajeNotificacion, tipoNotificacion } : PropsProductoStock ) => {

  const [editar, setEditar] = useState<number | null>(null);

  const editarProducto = (producto: ProductoType) => {
  setEditar(producto.id)
  setFormulario({
    nuevoCodigo: producto.codigo,
    nuevoNombre: producto.nombre,
    nuevaCantidad: producto.cantidad,
    nuevaCategoria: producto.categoria,
    nuevoPrecio: producto.precio
  })
}

  const {handleChange, nuevoCodigo, nuevoNombre, nuevaCantidad, nuevaCategoria, nuevoPrecio, setFormulario} = useForm<FormData>({
  nuevoNombre: '',
  nuevoCodigo:'',
  nuevaCantidad: 0,
  nuevaCategoria:'',
  nuevoPrecio:0,
  })

  const actualizarProducto = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();


      const objetoProducto = {
        id:editar!,
        nombre: nuevoNombre,
        cantidad:nuevaCantidad,
        categoria: nuevaCategoria,
        precio:nuevoPrecio,
        codigo:nuevoCodigo
      }
      if(nuevoNombre.length  > 25){
        alert("Nombre muy largo(maximo 25 caracteres)")
        return
      }
      servicioProducto
      .actualizar(editar!, objetoProducto)
      .then(() => {
      actualizarProductoEstado((productosAnteriores) =>
        productosAnteriores.map((producto) =>
          producto.id === editar ? { ...producto, ...objetoProducto } : producto
        )
      );
      mensajeNotificacion("correcta")  
      tipoNotificacion("Producto actualizado correctamente")
      setEditar(null)
      setTimeout(() => {
                mensajeNotificacion('')
                tipoNotificacion(null)
              }, 1000)
      })
      .catch(error => {
        console.error("Error al actualizar el número:", error)
        tipoNotificacion("incorrecta")
        mensajeNotificacion("No se pudo actualizar el producto")  
        setTimeout(() => {
                mensajeNotificacion('')
                tipoNotificacion(null)
              }, 1000)
      });
  }

  const eliminarProducto = (id : number) => {
      if (window.confirm('¿Seguro que querés eliminar el producto?')) {
        servicioProducto
        .eliminar(id)
        .then(() => {
        eliminarProductoEstado((productosAnteriores) =>
        productosAnteriores.filter(p => p.id !== id)
        );
      })
        .catch(error =>{
          console.log("error al eliminar el producto",error)
        })
      }
    }

  return (
    <div >
      {filtrarProductos.map((producto)=> (
      <div key={producto.id} className={styles.barra_producto} >
        <div className={styles.contenedor_svg}><svg className={styles.svg_producto} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ad0707"><path d="M6.99979 7V3C6.99979 2.44772 7.4475 2 7.99979 2H20.9998C21.5521 2 21.9998 2.44772 21.9998 3V16C21.9998 16.5523 21.5521 17 20.9998 17H17V20.9925C17 21.5489 16.551 22 15.9925 22H3.00728C2.45086 22 2 21.5511 2 20.9925L2.00276 8.00748C2.00288 7.45107 2.4518 7 3.01025 7H6.99979ZM8.99979 7H15.9927C16.549 7 17 7.44892 17 8.00748V15H19.9998V4H8.99979V7ZM4.00255 9L4.00021 20H15V9H4.00255Z"></path></svg></div>
        {editar == producto.id 
        ? 
          <FormularioStock 
            onSubmit={actualizarProducto}
            onChange={handleChange}
            nameCodigo="nuevoCodigo" valueCodigo={nuevoCodigo}
            nameNombre="nuevoNombre" valueNombre={nuevoNombre}
            nameCantidad="nuevaCantidad" valueCantidad={nuevaCantidad}
            nameCategoria="nuevaCategoria"  valueCategoria={nuevaCategoria}
            namePrecio="nuevoPrecio" valuePrecio={nuevoPrecio}
          />
        :
          <>
            <InformacionProducto productoInformacion={producto.codigo}  />
            <InformacionProducto productoInformacion={producto.nombre} />
            <InformacionProducto productoInformacion={producto.cantidad} />
            <InformacionProducto productoInformacion={producto.categoria} />
            <InformacionProducto productoInformacion={producto.precio} texto='$' /> 
          </>
        }
        
        <div className={styles.contenedor_boton_productos}>
          <button className={styles.boton_actualizar} onClick={() => editarProducto(producto)} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(247,243,243,1)"><path d="M16.7574 2.99678L14.7574 4.99678H5V18.9968H19V9.23943L21 7.23943V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99678C3 3.4445 3.44772 2.99678 4 2.99678H16.7574ZM20.4853 2.09729L21.8995 3.5115L12.7071 12.7039L11.2954 12.7064L11.2929 11.2897L20.4853 2.09729Z"></path></svg></button>
          <button className={styles.boton_eliminar} onClick={() => eliminarProducto(producto.id)} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg></button>
        </div>
      </div> 
      ))
    }
    </div>
  )
}

export default ProductoStock



