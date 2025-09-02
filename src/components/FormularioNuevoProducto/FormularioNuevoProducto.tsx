import { useEffect, useState } from "react";
import InputStock from "../FormularioStock/InputStock";
import InputCategoria from "../InputCategoria/InputCategoria";
import servicioProductos from "../../services/productos";
import styles from "./FormularioNuevoProducto.module.css";
import type { FormEvent } from "react";

interface PropsFormularioNuevoProducto {
onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;

  nombre: string;
  titulo: string;
  categoria: string;
  precio: number | string; 
  modelo: number | string;
  kilometros: number | string;
  motor: string;
  version: string;
  combustible: string;
  equipamiento: string;
  descripcion: string;
  imagenes: string;
  datos_externos: string;
  cubiertas: boolean;
  caja: string;
}

const FormularioNuevoProducto = ({
  onSubmit,
  onChange,
  nombre,
  titulo,
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
  const [categorias, setCategorias] = useState<string[]>([categoria]);

useEffect(() => {
  servicioProductos.obtener().then(response => {
    const categoriasUnicas = [...new Set(response.map(p => p.categoria))];
    setCategorias(categoriasUnicas);
  });
}, []);

  return (
    <form className={styles.formulario} onSubmit={onSubmit}>
      <div className={styles.contenedor_inputs}>
        {/* Nombre */}
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

        {/* Título */}
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Título</label>
          <InputStock
            name="titulo"
            value={titulo}
            onChange={onChange}
            type="text"
            placeholder="Título del Auto"
            clase="producto"
          />
        </div>

        {/* Categoría */}
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Categoría</label>
          <InputCategoria
            name="categoria"
            value={categoria}
            handleChange={onChange}
            categorias={categorias}
            clase="producto"
          />
        </div>

        {/* Precio */}
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Precio</label>
          <InputStock
            name="precio"
            value={precio}
            onChange={onChange}
            type="number"
            placeholder="Precio del Auto"
            clase="producto"
          />
        </div>

        {/* Modelo */}
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

        {/* Kilómetros */}
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Kilómetros</label>
          <InputStock
            name="kilometros"
            value={kilometros}
            onChange={onChange}
            type="number"
            placeholder="Kilometraje"
            clase="producto"
          />
        </div>

        {/* Motor */}
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

        {/* Versión */}
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

        {/* Combustible */}
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

        {/* Equipamiento */}
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

        {/* Descripción */}
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

        {/* Imágenes */}
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Imágenes</label>
          <InputStock
            name="imagenes"
            value={imagenes}
            onChange={onChange}
            type="text"
            placeholder="URL de imágenes (separadas por coma)"
            clase="producto"
          />
        </div>

        {/* Datos externos */}
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

        {/* Cubiertas */}
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Cubiertas</label>
          <input
            type="checkbox"
            name="cubiertas"
            checked={cubiertas}
            onChange={onChange}
          />
        </div>

        {/* Caja */}
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

      <button type="submit" className={styles.boton_formulario}>
        Enviar
      </button>
    </form>
  );
};


export default FormularioNuevoProducto;

{/* <InputStock 
        name={nameImangenDos}
        value={valueImagenDos}
        onChange={onChange}
        type="file"
        clase="file"
        tipoImagen="Subir Imagen"
      />
      <InputStock 
        name={nameImangenTres}
        value={valueImagenTres}
        onChange={onChange}
        type="file"
        clase="file"
        tipoImagen="Subir Imagen"
      />
      <InputStock 
        name={nameImangenCuatro}
        value={valueImagenCuatro}
        onChange={onChange}
        type="file"
        clase="file"
        tipoImagen="Subir Imagen"
      />
      <InputStock 
        name={nameImagenCinco}
        value={valueImagenCinco}
        onChange={onChange}
        type="file"
        clase="file"
        tipoImagen="Subir Imagen"
      /> */}