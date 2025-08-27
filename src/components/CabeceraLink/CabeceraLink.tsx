import { Link } from "react-router-dom";
import styles from "./CabeceraLink.module.css";

interface PropsCabeceraLink {
  url:string;
  children:string;
  isActive:boolean;
  onClick?: () => void;
}

const CabeceraLink = ({ url, children, isActive, onClick }:PropsCabeceraLink ) => {
  return (
      <Link to={url} className={styles.link}>
        <button onClick={onClick} className={`${styles.button} ${isActive ? styles.activeButton : ""}`}>
          {children}
        </button>
      </Link>
  );
};

export default CabeceraLink;
