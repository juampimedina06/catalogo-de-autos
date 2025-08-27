import styles from "./Banner.module.css"
import CaruselPrincipal from "./CaruselPrincipal"

const Banner = () => {
  return (
    <>
    <div className={styles.contenedor}>
      <CaruselPrincipal />
    </div>
    </>
  )
}

export default Banner

