import InputStock from "./InputStock"
import styles from "./FormularioStock.module.css"

interface PropsFormularioStock{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nameNombre:string; valueNombre:string;
  nameModelo:string; valueModelo:number;
  namePrecio:string; valuePrecio:string;
  nameKilometros:string; valueKilometros:string;
}

const FormularioStock = ({
    onSubmit, 
    onChange,
    nameNombre,valueNombre,
    nameModelo, valueModelo,
    namePrecio,valuePrecio,
    nameKilometros, valueKilometros
} : PropsFormularioStock) => {


  return (
    <form className={styles.formulario} onSubmit={onSubmit}>
      <InputStock 
        name={nameNombre}
        value={valueNombre}
        onChange={onChange}
        type="text"
        clase="stock"
      />
      <InputStock 
        name={nameModelo}
        value={valueModelo}
        onChange={onChange}
        type="number"
        clase="stock"
      />
      <InputStock 
        name={namePrecio}
        value={valuePrecio}
        onChange={onChange}
        type="text"
        clase="stock"
      />
      <InputStock 
        name={nameKilometros}
        value={valueKilometros}
        onChange={onChange}
        type="text"
        clase="stock"
      />
      <button type="submit" className={styles.boton_formulario}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
      </button>
    </form>
  )
}

export default FormularioStock