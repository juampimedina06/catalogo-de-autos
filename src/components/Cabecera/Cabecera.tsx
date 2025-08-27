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
      <Link to='/'>
        <section className={styles.logoContainer}>
          <img src="/img/bandera-roja.png" alt="Logo negocio" />
          <div className={styles.contenedor_texto}>
            <p>Tecno</p>
            <p>Plus</p>
          </div>
        </section>
      </Link>

      {/* NAV DESKTOP */}
      <nav className={styles.nav}>
        <CabeceraLink url='/' isActive={location.pathname === '/'}>
          Inicio
        </CabeceraLink>
        <CabeceraLink url='/TerminosCondiciones' isActive={location.pathname === '/TerminosCondiciones'}>
          Terminos y Condiciones
        </CabeceraLink>
        <CabeceraLink url='/PreguntasFrecuentes' isActive={location.pathname === '/PreguntasFrecuentes'}>
          Preguntas Frecuentes
        </CabeceraLink>
        <CabeceraLink url='/Stock' isActive={location.pathname === '/Stock'}>
          Stock
        </CabeceraLink>
        <CabeceraLink url='/NuevoProducto' isActive={location.pathname === '/NuevoProducto'}>
          Subir producto
        </CabeceraLink>
        
      </nav>

      {/* BOTÓN HAMBURGUESA */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </div>

      {/* NAV RESPONSIVE */}
      <nav className={menuAbierto ? styles.nav_responsive_activo : styles.nav_responsive}>
        <CabeceraLink url='/' isActive={location.pathname === '/'} onClick={toggleMenu}>
          Inicio
        </CabeceraLink>
        <CabeceraLink url='/TerminosCondiciones' isActive={location.pathname === '/TerminosCondiciones'}>
          Terminos y Condiciones
        </CabeceraLink>
        <CabeceraLink url='/PreguntasFrecuentes' isActive={location.pathname === '/PreguntasFrecuentes'}>
          Preguntas Frecuentes
        </CabeceraLink>
        <CabeceraLink url='/Stock' isActive={location.pathname === '/Stock'} onClick={toggleMenu}>
          Stock
        </CabeceraLink>
        <CabeceraLink url='/NuevoProducto' isActive={location.pathname === '/NuevoProducto'} onClick={toggleMenu}>
          Subir producto
        </CabeceraLink>
      </nav>
      <BlancoNegroTema />
    </header>
  );
};

export default Cabecera;

