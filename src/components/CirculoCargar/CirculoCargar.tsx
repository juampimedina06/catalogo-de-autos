import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from "./CirculoCargar.module.css"

const CirculoCargar = () => {
  return (
    <div className={styles.loading}>
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    </div>
  )
}

export default CirculoCargar