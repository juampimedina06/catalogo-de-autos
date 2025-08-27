import styles from "./inputCategoria.module.css"

interface PropsInputCategoria{
    name:string;
    value:string;
    handleChange: (e:React.ChangeEvent<HTMLSelectElement>) => void;
    categorias:string[];
    clase:string;
}

const InputCategoria = ({name, value, handleChange, categorias, clase} : PropsInputCategoria ) => {
    return (
        <select 
        name={name}
        value={value}
        onChange={handleChange}
        className={styles[`select_${clase}`]}
        >
        {categorias.map((categoria) => (
            <option value={categoria} key={categoria}>{categoria}</option>
        ))}
        
        </select>
        )
}

export default InputCategoria