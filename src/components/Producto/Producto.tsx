import styles from './Producto.module.css';
import { CardActionArea} from '@mui/material';

interface PropsProducto{
  nombre:string;
  precio:number;
  imagen?:string;
}

const Producto = ({nombre, precio, imagen}:PropsProducto) => {
  return (
      <div className={styles.producto}>
        <CardActionArea>
        <div className={styles.contenedor_imagen}>
            <img
              className={styles.imagen}
              alt="Producto"
              src={imagen}
            />
        </div>
        <div className={styles.contenedor_informacion}>
          <div className={styles.contenedor_titulo}>
            <h3 className={styles.titulo}>{nombre}</h3>
          </div>
          <div className={styles.contenedor_precio}>
            <span className={styles.precio}>${precio}</span>
          </div>
        </div>
        </CardActionArea>
    </div>
  );
};


export default Producto