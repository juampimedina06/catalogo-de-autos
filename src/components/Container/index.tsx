import styles from "./Container.module.css"

export interface ContainerProps{
  children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}

export default Container