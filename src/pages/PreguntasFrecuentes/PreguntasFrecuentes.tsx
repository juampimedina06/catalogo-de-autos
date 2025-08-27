import { useState } from 'react';
import styles from './PreguntasFrecuentes.module.css';

type Preguntas = {
  pregunta: string;
  respuesta: string;
}

type ToggleArgs = {
  index:number;
}

const preguntas: Preguntas[] = [
  {
    pregunta: '¿Cuánto tiempo tengo para hacer una devolución?',
    respuesta: 'Podés hacer la devolución dentro de las 48 horas de que te entregamos el producto.',
  },
  {
    pregunta: '¿Qué pasa si decido cancelar la compra después de recibir el producto?',
    respuesta: 'Si cancelás la compra después de recibir el producto sin razon alguna, se debe pagar la mitad del precio del producto, y esa plata queda como compensación para nosotros.',
  },
  {
    pregunta: '¿Qué tipo de productos venden?',
    respuesta: 'Vendemos productos electrónicos al mejor precio tanto para celular como para computadora.',
  },
  {
    pregunta: '¿El producto debe estar en su empaque original para hacer la devolución?',
    respuesta: 'Para las fundas del celular o vidrio protector antes de sacarle el film fijese que sea ese el modelo adecuado, si se le saca el plastico protector ya no tendra devolucion, sobre los demas productos si viene fallado se le devolvera un nuevo producto, siempre y cuando cumpla con las 48hs de entrega',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Mercado pago, Uala,NaranjaX, Mastercard, efectivo',
  },
  {
    pregunta: '¿Cuánto tarda en procesarse la devolución y el reembolso?',
    respuesta: 'Todos los viernes traeremos los productos',
  },
  {
    pregunta: '¿Qué pasa si el producto llegó con algún defecto o dañado?',
    respuesta: 'Avisar por wasap o en persona y se le dara un nuevo producto',
  },
  {
    pregunta: '¿Puedo cambiar un producto por otro en vez de pedir la devolución?',
    respuesta: 'Si, siempre y cuando tenga el mismo precio o pagar la diferencia',
  },
  {
    pregunta: '¿Hay garantía en los productos? ¿Cuánto dura?',
    respuesta: '48hs de garantia tiene el producto',
  },
  {
    pregunta: '¿Cobran envío por la devolución?',
    respuesta: 'No se le entregara en persona',
  },
];

export default function PreguntasFrecuentes() {
  const [abierto, setAbierto] = useState<number | null>(null); 

  const toggle = ({index} : ToggleArgs ) => {
    setAbierto(abierto === index ? null : index);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Preguntas Frecuentes</h2>
      <div className={styles.accordion}>
        {preguntas.map((item, i) => (
          <div key={i} className={styles.item}>
            <button
              className={styles.pregunta}
              onClick={() => toggle({index: i})}
              aria-expanded={abierto === i}
              aria-controls={`respuesta-${i}`}
              id={`pregunta-${i}`}
            >
              {item.pregunta}
              <span className={styles.icon}>{abierto === i ? '-' : '+'}</span>
            </button>
            {abierto === i && (
              <div
                id={`respuesta-${i}`}
                role="region"
                aria-labelledby={`pregunta-${i}`}
                className={styles.respuesta}
              >
                {item.respuesta || <em>Respuesta próximamente...</em>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
