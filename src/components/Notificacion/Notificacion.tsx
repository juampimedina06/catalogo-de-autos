import styles from "./Notificacion.module.css"

interface PropsNotificacion {
    mensaje: string | null;
    clase: string | null;
}

const Notificacion = ({ mensaje, clase }: PropsNotificacion) => {
    if (!mensaje) return null;

    const icono = clase === "correcta"
        ? "/img/okey.png"
        : clase === "incorrecta"
        ? "/img/cruz.png"
        : clase == "eliminado"
        ? "/img/basura.png"
        : null;

    return (
        <div className={styles.modal_overlay}>
            <div className={`${styles.modal_content} ${clase ? styles[clase] : ""}`}>
                {icono && <img className={styles.icono} src={icono} alt={clase || "notificacion"} />}
                <p className={styles.parrafo}>{mensaje}</p>
            </div>
        </div>
    );
};

export default Notificacion;
