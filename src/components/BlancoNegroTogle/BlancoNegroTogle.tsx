import styles from "./BlancoNegroTogle.module.css"
import { ChangeEvent, useEffect, useState } from "react"


type PropsModo =  "sistema" | "oscuro" | "claro"; 

export default function BlancoNegroTema() {
    const [modo, setModo] = useState<PropsModo>("sistema")

    useEffect(() => {
        const temaGuardado = localStorage.getItem("html")
        if (temaGuardado === "dark") {
            setModoOscuro()
            setModo("oscuro")
        } else if (temaGuardado === "light") {
            setModoClaro()
            setModo("claro")
        } else {
            setModoSistema()
            setModo("sistema")
        }
    }, [])

    const setModoOscuro = () => {
  const html = document.querySelector("html");
  if (html instanceof HTMLElement) {
    html.setAttribute("data-theme", "dark");
  }
};

const setModoClaro = () => {
  const html = document.querySelector("html");
  if (html instanceof HTMLElement) {
    html.setAttribute("data-theme", "light");
  }
};

const setModoSistema = () => {
  const html = document.querySelector("html");
  if (html instanceof HTMLElement) {
    html.removeAttribute("data-theme");
  }
};

    const obtenerValor = ({target}: ChangeEvent<HTMLSelectElement>) => {
        const valor = target.value;
        setModo(valor as PropsModo)

        switch (valor) {
            case "oscuro":
                setModoOscuro()
                localStorage.setItem("html", "dark")
                break
            case "claro":
                setModoClaro()
                localStorage.setItem("html", "light")
                break
            case "sistema":
                setModoSistema()
                localStorage.removeItem("html")
                break
        }
    }

    return (
        <label className={styles.label}>
            <select className={styles.select} value={modo} onChange={obtenerValor}>
                <option className={styles.option} value="sistema">💻</option>
                <option value="oscuro">🌑</option>
                <option value="claro">🌞</option>
            </select>
        </label>
    )
}
