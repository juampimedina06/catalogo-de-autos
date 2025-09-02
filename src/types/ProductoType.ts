export  interface ProductoType {
  id?: string;
  nombre:string;
  titulo:string;
  categoria:string;
  precio:number;
  modelo:number;
  kilometros:number;
  motor:string;
  version:string;
  combustible:string;
  equipamiento:string;
  descripcion:string;
  imagenes:[];
  datos_externos:[];
  cubiertas:boolean;
caja:string;
}