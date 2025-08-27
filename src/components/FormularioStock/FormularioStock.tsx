import InputStock from "./InputStock"
import styles from "./FormularioStock.module.css"
import servicioProductos from "../../services/productos"
import { useEffect, useState } from "react"
import InputCategoria from "../InputCategoria/InputCategoria"

interface PropsFormularioStock{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nameCodigo:string; valueCodigo:string;
  nameNombre:string; valueNombre:string;
  nameCantidad:string; valueCantidad:number;
  nameCategoria:string; valueCategoria:string;
  namePrecio:string; valuePrecio:number;
}

const FormularioStock = ({
    onSubmit, 
    onChange,
    nameCodigo,valueCodigo,
    nameNombre,valueNombre,
    nameCantidad,valueCantidad,
    nameCategoria, valueCategoria,
    namePrecio,valuePrecio
} : PropsFormularioStock) => {

  const [categorias, setCategorias] = useState<string[]>([valueCategoria])

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
      <InputStock
        name={nameCodigo}
        value={valueCodigo}
        onChange={onChange}
        type="text"
        clase="stock"
      />
      <InputStock 
        name={nameNombre}
        value={valueNombre}
        onChange={onChange}
        type="text"
        clase="stock"
      />
      <InputStock 
        name={nameCantidad}
        value={valueCantidad}
        onChange={onChange}
        type="number"
        clase="stock"
      />
      <InputCategoria 
      name={nameCategoria}
      value={valueCategoria}
      handleChange={onChange} 
      categorias={categorias}
      clase="stock"
      />
      <InputStock 
        name={namePrecio}
        value={valuePrecio}
        onChange={onChange}
        type="number"
        clase="stock"
      />
      <button type="submit" className={styles.boton_formulario}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
      </button>
    </form>
  )
}

export default FormularioStock