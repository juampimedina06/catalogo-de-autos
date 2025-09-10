import NombreTitulo from './NombreTitulo';
import styles from './TitulosStock.module.css';

const tiposTitulos = [
  'NOMBRE',
  'CATEGORIA',
  'PRECIO',
  'KILOMETROS'
];

const TitulosStock = () => {
    return (
        <div className={styles.referencia_titulo_productos}>
            {tiposTitulos.map((tiposTitulos, index) => (
                <NombreTitulo key={index} nombre={tiposTitulos} />
            ))}
        </div>
    );
};

export default TitulosStock;
