import NombreTitulo from './NombreTitulo';
import styles from './TitulosStock.module.css';

const tiposTitulos = [
  'CODIGO',
  'NOMBRE',
  'CANTIDAD',
  'CATEGORIA',
  'PRECIO'
];

const TitulosStock = () => {
    return (
        <div className={styles.referencia_titulo_productos}>
            <div className={styles.contenedor_svg}></div>
            {tiposTitulos.map((tiposTitulos, index) => (
                <NombreTitulo key={index} nombre={tiposTitulos} />
            ))}
            <div className={styles.contenedor_informacion_productos}></div>
        </div>
    );
};

export default TitulosStock;
