import styles from './Path.module.css'

interface PropsPath{
  indicador:string;
  children:React.ReactNode;      
}

const Path = ({ indicador, children } : PropsPath) => {
  return (
    <div className={styles.contenedor_indicador}>
      {children}
      <h2 className={styles.indicador}>{indicador}</h2>
    </div>
  )
}

export default Path
