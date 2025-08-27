import styles from "./TerminosCondiciones.module.css";

const TerminosCondiciones = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.contenedor_central}>
            <h1 className={styles.titulo}>📄 Términos y Condiciones</h1>

        <section className={styles.section}>
            <p>
                Bienvenid@ a nuestra tienda de accesorios tecnológicos. Al realizar una compra o
                reserva a través de nuestro canal de atención, aceptás los siguientes términos y condiciones:
            </p>
        </section>

        <section className={styles.section}>
            <h2 className={styles.subtitle}>1. Productos y servicios</h2>
            <p>Ofrecemos productos relacionados con:</p>
            <ul>
                <li>Accesorios para celulares (fundas, vidrios templados, cargadores, etc.)</li>
                <li>Auriculares (con posibilidad de devolución)</li>
                <li>Artículos para PC (mouses, teclados, cables, adaptadores, etc.)</li>
            </ul>
            <p>
                Todos los productos se encargan por WhatsApp a través de nuestro número oficial.
            </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>2. Pedidos y reservas</h2>
          <ul>
            <li>Para confirmar un pedido, <strong>se debe abonar al menos el 50%</strong> del valor del producto.</li>
            <li>Sin seña, <strong>no se garantiza la reserva</strong> del artículo.</li>
            <li>El saldo restante se puede abonar al momento de la entrega.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>3. Entregas</h2>
          <ul>
            <li>Las entregas se realizan únicamente los <strong>días lunes</strong>.</li>
            <li>Coordinamos previamente por WhatsApp la hora y lugar de entrega.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>4. Cambios y devoluciones</h2>
          <ul>
            <li>Se aceptan devoluciones dentro de las 48 horas hábiles desde la recepción del producto. Es importante verificar que sea la funda o vidrio protector correcto antes de retirar el film protector, ya que una vez removido no podremos aceptar la devolución.</li>

          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>5. Medios de pago</h2>
          <ul>
            <li>Transferencias bancarias</li>
            <li>Billeteras virtuales (Mercado Pago, Ualá, etc.)</li>
            <li>Efectivo</li>
          </ul>
          <p>El método se acuerda al momento de realizar el pedido.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>6. Privacidad</h2>
          <p>
            La información proporcionada por el cliente (número de WhatsApp, dirección de entrega, etc.) será usada únicamente para la gestión del pedido. No compartimos tus datos con terceros.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>7. Modificaciones</h2>
          <p>
            Estos términos pueden ser modificados en cualquier momento. Te recomendamos revisarlos antes de hacer una compra.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>8. Contacto</h2>
          <p>
            Para consultas, pedidos o reclamos, comunicate con nosotros por <a href="https://api.whatsapp.com/send?phone=5493516598216&text=Hola%20Juan%2C%20quiero%20encargar%20una%20funda">wasap</a>
          </p>
        </section>
        </div>
    </div>
  );
};

export default TerminosCondiciones;
