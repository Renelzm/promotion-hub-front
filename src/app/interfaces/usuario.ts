// Interfaz para el rol del usuario
export interface UserRole {
    id_rol: string;
    nombre_rol: string;
}

// Interfaz principal del usuario
export interface User {
    id_usuario: string;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    entidad: string;
    correo: string;
    telefono: string;
    isActive: boolean;
    createdAt: string; // Usamos string porque es un ISO Date
    passwordChange: boolean;
    rol: UserRole;
    token: string;
}