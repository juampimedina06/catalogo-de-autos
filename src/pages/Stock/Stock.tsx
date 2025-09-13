import { useState,useEffect } from 'react'
import CirculoCargar from '../../components/CirculoCargar/CirculoCargar'
import styles from "./Stock.module.css"
import BarraBusqueda from '../../components/BarraBusqueda/BarraBusqueda'
import ProductoStock from '../../components/ProductoStock/ProductoStock'
import TitulosStock from '../../components/TitulosStock/TitulosStock'
import ElementoNoEncontrado from '../../components/ElementoNoEncontrado/ElementoNoEncontrado'
import servicioProducto from "../../services/productos"
import Notificacion from '../../components/Notificacion/Notificacion'
import { useForm } from '../../hooks/useForm'
import { autoStock } from '../../types/stockType'

interface dataForm {
  filtrador: string;
}


const Stock = () => {
  const [producto, setProducto] = useState<autoStock[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [notificacionPersona, setNotificacionPersona] = useState<string>('')
  const [tipoNotificacion, setTipoNotificacion] = useState<string | null>(null)
  
  useEffect(() => {
    servicioProducto
    .obtenerStock()
    .then ((data) =>{
      setProducto(data)
      setLoading(false)
    })
  },[])

  const {handleChange, filtrador} = useForm<dataForm>({
    filtrador:'',
  })

  const filtrarProductos = producto.filter(producto =>
    producto.nombre.toLowerCase().includes(filtrador.toLowerCase()))

  if (loading){
    return <CirculoCargar />
  }

  return (
    <>
    <section className={styles.contenedor_productos}>
      <BarraBusqueda
        placeholder='Introduzca el nombre de auto que quiere buscar...' 
        value={filtrador}
        onChange={handleChange}
        name='filtrador'
      />
      {
        filtrarProductos.length === 0 
          ? <ElementoNoEncontrado tipoDato="Nombre" />
          : (
          <>
            <TitulosStock />
            <ProductoStock 
              filtrarProductos={filtrarProductos} 
              actualizarProductoEstado={setProducto}
              eliminarProductoEstado={setProducto}
              mensajeNotificacion={setNotificacionPersona}
              tipoNotificacion={setTipoNotificacion}
            />
          </>
      )
      }
    </section>
    <Notificacion mensaje={tipoNotificacion} clase={notificacionPersona}  />
    </>
  )
}

export default Stock

