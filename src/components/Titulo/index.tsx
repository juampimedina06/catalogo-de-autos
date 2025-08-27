import styles from "./Titulo.module.css"

interface PropTitulo{
  titulo:string;
}

const Titulo = ({titulo}:PropTitulo) => {
  return (
    <h2 className={styles.titulo}>{titulo}</h2>
  )
}

export default Titulo