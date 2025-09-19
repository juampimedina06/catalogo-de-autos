import styles from "./Bancos.module.css";

const bancos = [
  { src: "/img/Bancor.png", alt: "Bancor" },
  { src: "/img/Galicia.png", alt: "Galicia" },
  { src: "/img/Santander.png", alt: "Santander" },
  { src: "/img/zaro.jpeg", alt: "Zaro" },
  { src: "/img/supervielle.png", alt: "Supervielle" },
  { src: "/img/Banco_Nacion.png", alt: "Banco Nacion" },
];

const Banco = () => {
  return (
    <section className={styles.banco_section}> 
      <div className={styles.container}>
        <h2 className={styles.titulo}>
          El auto que queres, con la financiación que necesitas!
        </h2>

        <div className={styles.logos_container}>
          {bancos.map((banco, index) => (
            <div className={styles.logo_item} key={index}>
              <img src={banco.src} alt={banco.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banco;