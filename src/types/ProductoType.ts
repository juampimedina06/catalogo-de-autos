export  interface ProductoType {
  id?: number;
  nombre:string;
  categoria:string;
  precio:string;
  modelo:number;
  kilometros:string;
  motor:string;
  version:string;
  combustible:string;
  equipamiento:string;
  descripcion:string;
  imagenes:string[];
  datos_externos:string[];
  cubiertas:boolean;
  caja:string;
}