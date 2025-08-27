import { useEffect, useState } from "react"
import InputStock from "../FormularioStock/InputStock"
import InputCategoria from "../InputCategoria/InputCategoria"
import servicioProductos from "../../services/productos"
import styles from "./FormularioNuevoProducto.module.css"
import type { FormEvent } from "react";


interface PropsFormularioNuevoProducto {
  onSubmit: (e:FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nameNombre:string; valueNombre:string;
  namePrecio:string; valuePrecio:number;
  nameFecha:string; valueFecha:string;
  nameCodigo:string; valueCodigo:string;
  nameDescripcion:string; valueDescripcion:string;
  nameCategoria:string; valueCategoria:string;
  nameCantidad:string; valueCantidad:number;
  nameImagenPrincipal:string; valueImagenPrincipal:string;
}

const FormularioNuevoProducto = ({
    onSubmit, 
    onChange,
    nameNombre, valueNombre,
    namePrecio, valuePrecio,
    nameFecha, valueFecha,
    nameCodigo, valueCodigo,
    nameDescripcion, valueDescripcion,
    nameCategoria, valueCategoria,
    nameCantidad, valueCantidad,
    nameImagenPrincipal, valueImagenPrincipal,
}:PropsFormularioNuevoProducto) => {

  const [categorias, setCategorias] = useState([valueCategoria])
  
    useEffect(() =>{
    servicioProductos
    .obtener()
    .then(response =>{
        const categorias = [...new Set(response.map(producto => producto.categoria))];
        setCategorias(categorias);
    })
    },[])

  return (
    <form className={styles.formulario} onSubmit={onSubmit}>
      <div className={styles.contenedor_inputs}>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Nombre del producto</label>
          <InputStock 
          name={nameNombre}
          value={valueNombre}
          onChange={onChange}
          type="text"
          placeholder="Nombre del Pruducto"
          clase="producto"
          />
        </div>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Cantidad del producto</label>
          <InputStock 
            name={namePrecio}
            value={valuePrecio}
            onChange={onChange}
            type="number"
            placeholder="Cantidad del producto"
            clase="producto"
          />
        </div>
      </div>

      <div className={styles.contenedor_inputs}>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Fecha de hoy</label>
          <InputStock 
          name={nameFecha}
          value={valueFecha}
          onChange={onChange}
          type="date"
          clase="producto"
          placeholder="Fecha de hoy"
          />
        </div>
      <div className={styles.contenedor_input}>
          <label className={styles.label}>Codigo del producto</label>
          <InputStock 
          name={nameCodigo}
          value={valueCodigo}
          onChange={onChange}
          type="text"
          placeholder="Codigo del producto"
          clase="producto"
          />
        </div>
      </div>

      <div className={styles.contenedor_inputs}>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Descripcion del producto</label>
          <InputStock 
            name={nameDescripcion}
            value={valueDescripcion}
            onChange={onChange}
            type="text"
            placeholder="Descripcion del producto"
            clase="producto"
          />
        </div>
        <div className={styles.contenedor_input}>
          <label className={styles.label}>Categoria del producto</label>          
          <InputStock 
            name={nameCantidad}
            value={valueCantidad}
            onChange={onChange}
            type="number"
            placeholder={nameCantidad}
            clase="producto"
          />
        </div>
      </div>
      <label className={styles.label}>Categoria del producto</label>
      <InputCategoria 
        name={nameCategoria}
        value={valueCategoria}
        handleChange={onChange} 
        categorias={categorias}
        clase="producto"
      />
      <label className={styles.label}>Imagen del producto</label>
      <InputStock 
        name={nameImagenPrincipal}
        value={valueImagenPrincipal}
        onChange={onChange}
        type="file"
        clase="file"
        tipoImagen="Subir Imagen principal"
      />
      <button type="submit" className={styles.boton_formulario}>Enviar</button>
    </form>
  )
}

export default FormularioNuevoProducto

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