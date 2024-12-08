// components/AuthState.tsx
"use client";

import { useState, useEffect } from "react";
import { initializeAuthStore } from "@/store/user-store";
// import { useAuthStore } from "@/store/user-store";

export const AuthState = () => {
  const [loading, setLoading] = useState(true); // Estado de carga
  // const  isAuthenticated  = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    // Inicializa el estado de autenticación en el cliente
    const initUser = initializeAuthStore();
    setLoading(false); // Ya que se completó la inicialización

    if (!initUser) {
      console.log("No hay usuario detectado");
    }
  }, []);

  // Muestra un "loading" hasta que el estado de autenticación esté listo
  if (loading) {
    return <div>Cargando...</div>;
  }

  return null;
};
