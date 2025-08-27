import styles from "./Notificacion.module.css"

interface PropsNotificacion{
    mensaje:string | null;
    clase:string;
}

const Notificacion = ({ mensaje, clase }:PropsNotificacion) => {
    if (mensaje === null) {
        return null
    }
    return (
 
        <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
                <p>{mensaje}</p>
                 {
                clase === "correcta" ? (
                    <img className={styles.okey} src="./img/okey.png" alt="" />
                ) : clase === "incorrecta" ? (
                    <img className={styles.okey} src="./img/incorrecto.png" alt="" />
                ) : null
            }
            </div>
        </div>
    )
}

export default Notificacion
