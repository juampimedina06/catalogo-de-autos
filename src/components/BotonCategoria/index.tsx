import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./BotonCategoria.module.css"

import type { SelectChangeEvent } from '@mui/material/Select';


interface PropsBotonCategoria {
  name: string;
  value: string;
  handleChange?: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
  categorias: string[];
}

const BotonCategoria = ({name,value,handleChange, categorias}: PropsBotonCategoria) => {

  return (
    <div className={styles.contenedor_categorias}>
      <FormControl 
  fullWidth 
  size="small" 
  className={styles.categoria}
  sx={{
    '& .MuiInputLabel-root': {
      color: '#ccc',              // color gris para el label arriba
      '&.Mui-focused': {
        color: '#ccc',          // mismo gris cuando está enfocado
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',      // borde gris medio normal
      },
      '&:hover fieldset': {
        borderColor: '#ccc',      // borde gris medio cuando hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ccc',      // borde gris medio cuando está enfocado
      },
      color: '#ccc',              // color de las letras input
    },
    '& .MuiInputBase-input': {
      color: '#ccc',              // color texto dentro del input
    },
  }}
>
        <InputLabel className={styles.input_categorias} id="demo-simple-select-label">Categorias</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label="Categoria"
          onChange={handleChange}
        >
          <MenuItem value=''>Todas</MenuItem>
          {categorias.map((categoria) => (
            <MenuItem value={categoria} key={categoria}>{categoria}</MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </div>
  )
}

export default BotonCategoria


