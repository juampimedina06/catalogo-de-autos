import { ProductoType } from "../types/ProductoType";
import { supabase } from "./supabase-config";

const crear = async (auto : ProductoType) => {
  const { data, error } = await supabase
    .from("autos")
    .insert([auto]);

  if (error) throw error;
  return data;
};

const obtener = async () => {
  const { data, error } = await supabase
    .from("autos")
    .select("*"); 

  if (error) throw error;
  return data;
};

const obtenerPorId = async (id : number) => {
  const { data, error } = await supabase
    .from("autos")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

const editar = async (id : number, auto : any) => {
  const { data, error } = await supabase
    .from("autos")
    .update(auto)
    .eq("id", id);

  if (error) throw error;
  return data;
};

export const eliminar = async (id : number) => {
  const { data, error } = await supabase
    .from("autos")
    .delete()
    .eq("id", id);

  if (error) throw error;
  return data;
};

export default {
  crear,
  obtener,
  obtenerPorId,
  editar,
  eliminar
};

// import { db } from './firebase-config';
// import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc  } from "firebase/firestore";
// import { ProductoType } from '../types/ProductoType';

// const productosRef = collection(db, "autos");

// const crear = async (producto: ProductoType) => {
//   try {
//     const docRef = await addDoc(productosRef, {
//       ...producto,
//       creadoEn: new Date()
//     });
//     return { id: docRef.id, ...producto };
//   } catch (error) {
//     console.error("Error al crear producto en Firestore", error);
//     throw error;
//   }
// };

// const obtener = async (): Promise<ProductoType[]> => {
//   try {
//     const snapshot = await getDocs(productosRef);
//     const productos: ProductoType[] = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...(doc.data() as Omit<ProductoType, "id">)
//     }));
//     return productos;
//   } catch (error) {
//     console.error("Error al obtener productos de Firestore", error);
//     return [];
//   }
// }

// const obtenerPorId = async (id: string): Promise<ProductoType | null> => {
//   try {
//     const docRef = doc(db, "autos", id);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       return { id: docSnap.id, ...(docSnap.data() as Omit<ProductoType, "id">) };
//     } else {
//       console.warn("El documento no existe");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error al obtener producto por id", error);
//     return null;
//   }
// };

// const editar = async (id: string, producto: Partial<ProductoType>) => {
//   try {
//     const docRef = doc(db, "autos", id);
//     await updateDoc(docRef, {
//       ...producto,
//       actualizadoEn: new Date(),
//     });
//     return true;
//   } catch (error) {
//     console.error("Error al actualizar producto en Firestore", error);
//     return false;
//   }
// };

// const eliminar = async (id: string) => {
//   try {
//     const docRef = doc(db, "autos", id);
//     await deleteDoc(docRef);
//     return true;
//   } catch (error) {
//     console.error("Error al eliminar producto en Firestore", error);
//     return false;
//   }
// };

// export default {
//   crear,
//   obtener,
//   obtenerPorId,
//   editar,
//   eliminar
// };