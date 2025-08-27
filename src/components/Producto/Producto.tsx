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
            <img 
              src="https://landinginteligente.com/fotos/CatalogoUsados/deconcesionarias--2023-6-14--15-28-41/31963200-a857-4f6d-a9c3-c7e5bd9f7b98.jpg" 
              alt="" 
              className={styles.imagen_hover}
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