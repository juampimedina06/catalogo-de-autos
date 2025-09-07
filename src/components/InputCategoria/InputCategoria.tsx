import styles from "./inputCategoria.module.css"

interface PropsInputCategoria {
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    clase: string;
}

const categorias = [
    "",
    "Toyota",
    "Volkswagen",
    "Fiat",
    "Renault",
    "Peugeot",
    "Ford",
    "Chevrolet",
    "Citroën",
    "Jeep",
    "Nissan",
    "Mercedes-Benz",
    "Audi",
    "BMW",
    "Hyundai",
    "Baic"
];

const InputCategoria = ({ name, value, handleChange, clase }: PropsInputCategoria) => {
    return (
        <select
            name={name}
            value={value}
            onChange={handleChange}
            className={styles[`select_${clase}`]}
        >
        {categorias.map((marca) => (
            <option value={marca} key={marca}>{marca}</option>
        ))}
        </select>
    );
};

export default InputCategoria;
