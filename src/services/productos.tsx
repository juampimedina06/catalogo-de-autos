import axios from 'axios'
const baseUrl = 'https://67c6be3c351c081993fe9984.mockapi.io/productos/producto'
import { ProductoType } from '../types/ProductoType';

const obtener = () : Promise<ProductoType[]> => {
  const request = axios.get<ProductoType[]>(baseUrl);
  return request.then(response => response.data);
}

const crear = (newObject : ProductoType): Promise<ProductoType[]> => {
  const request = axios.post<ProductoType[]>(baseUrl, newObject)
  return request.then(response => response.data)
}

const actualizar = (id : number, newObject : ProductoType) : Promise<ProductoType> => {
  const request = axios.put<ProductoType>(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const eliminar = (id : number ) : Promise<void> => {
  const request = axios.delete<ProductoType>(`${baseUrl}/${id}`)
  return request.then(response => {
    console.log(response.data)
  })
}

export default { obtener, crear, actualizar, eliminar }