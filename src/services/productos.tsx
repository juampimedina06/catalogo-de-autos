import { db } from './firebase-config';
import { collection, addDoc, getDocs  } from "firebase/firestore";
import { ProductoType } from '../types/ProductoType';

const productosRef = collection(db, "autos");

const crear = async (producto: ProductoType) => {
  try {
    const docRef = await addDoc(productosRef, {
      ...producto,
      creadoEn: new Date()
    });
    return { id: docRef.id, ...producto };
  } catch (error) {
    console.error("Error al crear producto en Firestore", error);
    throw error;
  }
};

const obtener = async (): Promise<ProductoType[]> => {
  try {
    const snapshot = await getDocs(productosRef);
    const productos: ProductoType[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<ProductoType, "id">)
    }));
    return productos;
  } catch (error) {
    console.error("Error al obtener productos de Firestore", error);
    return [];
  }
}

export default {
  crear,
  obtener
};