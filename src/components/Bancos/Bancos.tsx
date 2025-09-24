import Titulo from "../Titulo";
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
        <Titulo titulo="Financiación con los mejores bancos" />

        <div className={styles.logos_container}>
          {bancos.map((banco, index) => (
            <div className={styles.logo_item} >
              <img src={banco.src} alt={banco.alt} key={index}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banco;