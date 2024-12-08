"use client";
import React, { useState } from "react";
import { TextInput, PasswordInput, Button, Card, Title } from "@mantine/core";
import axios from "axios";
import { configStore } from "@/store/config-store";
import { useAuthStore } from "@/store/user-store";
import useUserRedirect from "@/app/hooks/useUserRedirect";
import { User } from "@/app/interfaces/usuario";

export const LoginCard = () => {
  const baseUrl = configStore((state) => state.baseApiUrl);
  const login = useAuthStore((state) => state.login);
  const user = useAuthStore((state) => state.user);

  const [formData, setFormData] = useState({
    correo: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null); // Para manejar errores de la API

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Resetea errores al intentar un nuevo login

    try {
      const response = await axios.post(`${baseUrl}/auth/login`, formData);
      const loggedUser: User = response.data;
      login(loggedUser); // Actualiza el store global
      alert("¡Inicio de sesión exitoso!");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message || "Error al iniciar sesión");
      } else {
        setError("Ha ocurrido un error inesperado");
      }
    }
  };

  // Hook de redirección basado en el store
  useUserRedirect({
    rol: user?.rol.nombre_rol,
    id: user?.id_usuario,
  });

  return (
    <div className="flex justify-center items-center mt-10">
      <Card shadow="lg" padding="xl" radius="md" className="w-full max-w-lg">
        <Title order={2} className="mb-6 text-sky-800 text-center">
          Iniciar sesión
        </Title>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo de Correo Electrónico */}
          <TextInput
            label="Correo Electrónico"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ingresa tu correo"
            required
          />

          {/* Campo de Contraseña */}
          <PasswordInput
            label="Contraseña"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            required
          />

          {/* Mensaje de Error */}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Botón de Enviar */}
          <div>
            <Button
              type="submit"
              fullWidth
              className="bg-sky-800 hover:bg-blue-600"
            >
              Iniciar sesión
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
