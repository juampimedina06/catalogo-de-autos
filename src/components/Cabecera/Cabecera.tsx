import { useState } from 'react';
import styles from "./Cabecera.module.css";
import { Link, useLocation } from "react-router-dom";
import CabeceraLink from '../CabeceraLink/CabeceraLink';
import BlancoNegroTema from '../BlancoNegroTogle/BlancoNegroTogle';

const Cabecera = () => {
  const location = useLocation();
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className={styles.cabecera}>
      <div className={styles.lupa_logo_user}>
        <div className={styles.contenedor_busqueda}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
        </div>
        <div className={styles.contenedor_logo}>
          <Link to='/'>
            <img className={styles.logo} src="assets/logo_sinfondo.png" alt="Logo negocio" />
          </Link>
        </div>
      
        <div className={styles.contenedor_admin}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
        <BlancoNegroTema />
        </div>
      </div>
      <div className={styles.contenedor_links}>

      {/* NAV DESKTOP */}
      <nav className={styles.nav}>
        <CabeceraLink url='/' isActive={location.pathname === '/'}>
          Inicio
        </CabeceraLink>
        <CabeceraLink url='/Autos' isActive={location.pathname === '/Autos'}>
          Autos
        </CabeceraLink>
        <CabeceraLink url='/Stock' isActive={location.pathname === '/Stock'}>
          stock autos
        </CabeceraLink>
        <CabeceraLink url='/NuevoProducto' isActive={location.pathname === '/NuevoProducto'}>
          Subir Auto
        </CabeceraLink>
        
      </nav>
      </div>

      {/* BOTÓN HAMBURGUESA */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </div>

      {/* NAV RESPONSIVE */}
      <nav className={menuAbierto ? styles.nav_responsive_activo : styles.nav_responsive}>
        <CabeceraLink url='/' isActive={location.pathname === '/'}>
          Inicio
        </CabeceraLink>
        <CabeceraLink url='/Autos' isActive={location.pathname === '/Autos'}>
          Autos
        </CabeceraLink>
        <CabeceraLink url='/Stock' isActive={location.pathname === '/Stock'}>
          stock autos
        </CabeceraLink>
        <CabeceraLink url='/NuevoProducto' isActive={location.pathname === '/NuevoProducto'}>
          Subir Auto
        </CabeceraLink>
      </nav>
    </header>
  );
};

export default Cabecera;

