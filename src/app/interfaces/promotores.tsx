export interface Rol {
  id_rol: string;
  nombre_rol: string;
}

export interface Promovido {
  id_promovido: string;
  nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  ciudad: string;
  colonia: string;
  calle: string;
  numero: string;
  clave_electoral: string;
  curp: string;
  entidad: string;
  foto_ine: string;
  seccion_electoral: string;
  correo: string;
  telefono: string;
  isActive: boolean;
  promoventeInmediatoRol: string;
  createdAt: string;
  structureRol: string;
  voto: boolean;
}

export interface Promotor {
  id_promotor: string;
  nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  ciudad: string;
  colonia: string;
  calle: string;
  numero: string;
  clave_electoral: string;
  curp: string;
  entidad: string;
  foto_ine: string;
  seccion_electoral: string;
  correo: string;
  telefono: string;
  isActive: boolean;
  promoventeInmediatoRol: string;
  createdAt: string;
  structureRol: string;
  voto: boolean;
  total_promovidos: number;
  promovidos: Promovido[];
}

export interface Estructura {
  id_usuario: string;
  nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  entidad: string;
  correo: string;
  telefono: string;
  isActive: boolean;
  createdAt: string;
  passwordChange: boolean;
  rol: Rol;
  totalPromotores: number;
  totalPromovidos: number;
  promotores: Promotor[];
}

export interface JefeZona {
  jefeZona: string;
  estructura: Estructura;
}

export interface RespuestaPromotores {
  promovidos: number;
  promotores: number;
  jefesZona: number;
  estructura: JefeZona[];
}
