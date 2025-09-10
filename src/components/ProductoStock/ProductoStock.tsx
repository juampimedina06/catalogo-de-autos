import { useState } from 'react'
import InformacionProducto from './InformacionProducto'
import styles from './ProductoStock.module.css'
import FormularioStock from '../FormularioStock/FormularioStock'
import servicioProducto from "../../services/productos"
import { useForm } from "../../hooks/useForm";
import { autoStock } from '../../types/stockType'

interface FormData{
  nuevoNombre:string;
  nuevaCategoria:string; 
  nuevoPrecio:number;
  nuevoKilometros:number;
}

interface PropsProductoStock {
  filtrarProductos: autoStock[];
  actualizarProductoEstado: (actualizar: (productosPrevios: autoStock[]) => autoStock[]) => void;
  eliminarProductoEstado: (eliminar: (productosPrevios: autoStock[]) => autoStock[]) => void;
  mensajeNotificacion: (mensaje: string) => void;
  tipoNotificacion: (tipo: string | null) => void;
}

const ProductoStock = ({filtrarProductos, actualizarProductoEstado,eliminarProductoEstado, mensajeNotificacion, tipoNotificacion } : PropsProductoStock ) => {
  const [editar, setEditar] = useState<number | undefined>(undefined);

  const editarProducto = (producto: autoStock) => {
  setEditar(producto.id)
  setFormulario({
    nuevoNombre: producto.nombre,
    nuevaCategoria: producto.categoria,
    nuevoPrecio: producto.precio,
    nuevoKilometros: producto.kilometros
  })
}

  const {handleChange, nuevoNombre, nuevaCategoria, nuevoPrecio, nuevoKilometros, setFormulario} = useForm<FormData>({
  nuevoNombre: '',
  nuevaCategoria:'',
  nuevoPrecio:0,
  nuevoKilometros:0
  })

  const actualizarProducto = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();


      const objetoProducto = {
        id:editar!,
        nombre: nuevoNombre,
        categoria: nuevaCategoria,
        precio:nuevoPrecio,
        kilometros:nuevoKilometros
      }
      if(nuevoNombre.length  > 25){
        alert("Nombre muy largo(maximo 25 caracteres)")
        return
      }
      servicioProducto
      .editar(editar!, objetoProducto)
      .then(() => {
      actualizarProductoEstado((productosAnteriores) =>
        productosAnteriores.map((producto) =>
          producto.id === editar ? { ...producto, ...objetoProducto } : producto
        )
      );
      mensajeNotificacion("correcta")  
      tipoNotificacion("Producto actualizado correctamente")
      setEditar(undefined)
      setTimeout(() => {
                mensajeNotificacion('')
                tipoNotificacion(null)
              }, 1000)
      })
      .catch(error => {
        console.error("Error al actualizar el producto:", error)
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
    <div className={styles.producto}>
      {filtrarProductos.map((producto)=> (
      <div key={producto.id} className={styles.barra_producto} >
        <div className={styles.contenedor_svg}><svg className={styles.svg_producto} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 13.5V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V13.5L0.757464 13.1894C0.312297 13.0781 0 12.6781 0 12.2192V11.5C0 11.2239 0.223858 11 0.5 11H2.375L4.51334 5.29775C4.80607 4.51715 5.55231 4 6.386 4H17.614C18.4477 4 19.1939 4.51715 19.4867 5.29775L21.625 11H23.5C23.7761 11 24 11.2239 24 11.5V12.2192C24 12.6781 23.6877 13.0781 23.2425 13.1894L22 13.5ZM4 15V17C4 17.5523 4.44772 18 5 18H8.24496C8.3272 18 8.40818 17.9797 8.4807 17.9409C8.72418 17.8107 8.81602 17.5078 8.68582 17.2643L8.68588 17.2643C7.87868 15.7548 6.31672 15 4 15ZM20 15C17.6833 15 16.1213 15.7548 15.3141 17.2643L15.3142 17.2643C15.184 17.5078 15.2758 17.8107 15.5193 17.9409C15.5918 17.9797 15.6728 18 15.755 18H19C19.5523 18 20 17.5523 20 17V15ZM6 6L4.43874 10.6838C4.40475 10.7857 4.38743 10.8925 4.38743 11C4.38743 11.5523 4.83514 12 5.38743 12H18.6126C18.7201 12 18.8268 11.9827 18.9288 11.9487C19.4527 11.774 19.7359 11.2077 19.5613 10.6838L18 6H6Z"></path></svg></div>
        <div className={styles.contenedor_inputs_producto}>
          {editar == producto.id 
          ? 
            <FormularioStock 
              onSubmit={actualizarProducto}
              onChange={handleChange}
              nameNombre="nuevoNombre" valueNombre={nuevoNombre}
              nameCategoria="nuevaCategoria"  valueCategoria={nuevaCategoria}
              namePrecio="nuevoPrecio" valuePrecio={nuevoPrecio}
              nameKilometros='nuevoKilometros' valueKilometros={nuevoKilometros}
            />
          :
            <div className={styles.contenedor_informacion}>
              <InformacionProducto productoInformacion={producto.nombre} />
              <InformacionProducto productoInformacion={producto.categoria} />
              <InformacionProducto productoInformacion={producto.precio} texto='$' /> 
              <InformacionProducto productoInformacion={producto.kilometros}  /> 
            </div>
          }
        </div>
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



