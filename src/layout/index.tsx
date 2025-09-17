import Cabecera from '../components/Cabecera/Cabecera'
import Pie from '../components/Pie/Pie'
import BotonWasap from '../components/BotonWasap/BotonWasap'
import styles from './Layout.module.css'
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="">
      <BotonWasap />
        <Cabecera />

      <main className={styles.main}>
        {children}
      </main>

      <Pie />
    </div>
  );
}
