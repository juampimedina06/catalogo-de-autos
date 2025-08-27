import styles from './ProductoStock.module.css'

interface PropsInformacionProducto{
  productoInformacion:string | number;
  texto?:string;
}

const InformacionProducto = ({productoInformacion, texto}:PropsInformacionProducto) => {
  return (
        <div className={styles.contenedor_informacion_productos}><p className={styles.informacion_producto}>{texto}{productoInformacion}</p></div>  
    )
}

export default InformacionProducto