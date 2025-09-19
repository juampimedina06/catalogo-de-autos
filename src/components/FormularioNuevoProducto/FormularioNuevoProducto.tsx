import InputStock from "../FormularioStock/InputStock";
import InputCategoria from "../InputCategoria/InputCategoria";
import styles from "./FormularioNuevoProducto.module.css";

interface PropsFormularioNuevoProducto {
onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;

  nombre: string;
  categoria: string;
  precio: number | string; 
  modelo: number | string;
  kilometros: number | string;
  motor: string;
  version: string;
  combustible: string;
  equipamiento: string;
  descripcion: string;
  imagenes: string[];
  datos_externos: string[];
  cubiertas: boolean;
  caja: string;
}

const FormularioNuevoProducto = ({
  onSubmit,
  onChange,
  nombre,
  categoria,
  precio,
  modelo,
  kilometros,
  motor,
  version,
  combustible,
  equipamiento,
  descripcion,
  imagenes,
  datos_externos,
  cubiertas,
  caja,
}: PropsFormularioNuevoProducto) => {


  return (
    <form className={styles.formulario} onSubmit={onSubmit}>
      <div className={styles.contenedor_inputs}>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Nombre del Auto</label>
          <InputStock
            name="nombre"
            value={nombre}
            onChange={onChange}
            type="text"
            placeholder="Nombre del Auto"
            clase="producto"
          />
        </div>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Combustible</label>
          <InputStock
            name="combustible"
            value={combustible}
            onChange={onChange}
            type="text"
            placeholder="Tipo de Combustible"
            clase="producto"
          />
        </div>
      </div>

      <div className={styles.contenedor_inputs}>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Categoría</label>
          <InputCategoria
            name="categoria"
            value={categoria}
            handleChange={onChange}
            clase="producto"
          />
        </div>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Precio</label>
          <InputStock
            name="precio"
            value={precio}
            onChange={onChange}
            type="text"
            placeholder="Precio del Auto"
            clase="producto"
          />
        </div>
      </div>

      <div className={styles.contenedor_inputs}>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Modelo</label>
          <InputStock
            name="modelo"
            value={modelo}
            onChange={onChange}
            type="number"
            placeholder="Año del Modelo"
            clase="producto"
          />
        </div>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Kilómetros</label>
          <InputStock
            name="kilometros"
            value={kilometros}
            onChange={onChange}
            type="text"
            placeholder="Kilometraje"
            clase="producto"
          />
        </div>
      </div>

      <div className={styles.contenedor_inputs}>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Motor</label>
          <InputStock
            name="motor"
            value={motor}
            onChange={onChange}
            type="text"
            placeholder="Motor del Auto"
            clase="producto"
          />
        </div>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Versión</label>
          <InputStock
            name="version"
            value={version}
            onChange={onChange}
            type="text"
            placeholder="Versión"
            clase="producto"
          />
        </div>
      </div>

        <div className={styles.contenedor_input}>
          <label className={styles.label}>Equipamiento</label>
          <InputStock
            name="equipamiento"
            value={equipamiento}
            onChange={onChange}
            type="text"
            placeholder="Equipamiento adicional"
            clase="producto"
          />
        </div>

        
      <div className={styles.contenedor_inputs}>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Datos externos</label>
          <InputStock
            name="datos_externos"
            value={datos_externos}
            onChange={onChange}
            type="text"
            placeholder="Datos adicionales"
            clase="producto"
          />
        </div>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Caja</label>
          <InputStock
            name="caja"
            value={caja}
            onChange={onChange}
            type="text"
            placeholder="Caja de cambios"
            clase="producto"
          />
        </div>
      </div>

        <div className={styles.contenedor_input}>
          <label className={styles.label}>Descripción</label>
          <InputStock
            name="descripcion"
            value={descripcion}
            onChange={onChange}
            type="text"
            placeholder="Descripción"
            clase="producto"
          />
        </div>

        <div className={styles.contenedor_input}>
          <label className={styles.label}>Imágenes</label>
          <input
            name="imagenes"
            onChange={onChange}
            type="file"
            multiple
            accept="image/*"
          />
        </div>

        <div className={styles.contenedor_input}>
          <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="cubiertas"
            checked={cubiertas}
            onChange={onChange}
          />
          <span className={styles.checkmark}></span>
          Cubiertas
        </label>
        </div>


      <button type="submit" className={styles.boton_formulario}>
        Enviar
      </button>
    </form>
  );
};


export default FormularioNuevoProducto;
