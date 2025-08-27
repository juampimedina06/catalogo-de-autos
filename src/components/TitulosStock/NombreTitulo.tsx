import styles from './TitulosStock.module.css'

interface PropNombre{
  nombre:string;
}

const NombreTitulo = ({nombre}:PropNombre) => {
  return (
    <div className={styles.contenedor_informacion_productos}><p className={styles.titulos_productos}>{nombre}</p></div>
  )
}

export default NombreTitulo