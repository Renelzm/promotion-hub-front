"use client";
import React, { useState } from "react";
import { TextInput, Button, Card, Divider, Text } from "@mantine/core";
import { useParams } from "next/navigation";

export const PromotorForm = () => {
  const params = useParams();
  const { token } = params;

  const [formData, setFormData] = useState({
    nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    ciudad: "",
    colonia: "",
    calle: "",
    numero: "",
    clave_electoral: "",
    curp: "",
    seccion_electoral: "",
    foto_ine: "xxx.png",
    telefono: "",
    correo: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData, token);
  };

  return (
    <div className="flex  justify-center ">
      <Card shadow="md" padding="xs" radius="md" className="max-w-7xl w-full">
        <Text>
          Llena tus datos para ser parte del equipo de xxx... intrucciones
        </Text>
        <form onSubmit={handleSubmit} className="p-4 rounded-md">
          <Divider my="lg" label="Datos generales" labelPosition="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            <TextInput
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              required
            />
            <TextInput
              label="Primer Apellido"
              name="primer_apellido"
              value={formData.primer_apellido}
              onChange={handleChange}
              placeholder="Ingresa tu primer apellido"
              required
            />
            <TextInput
              label="Segundo Apellido"
              name="segundo_apellido"
              value={formData.segundo_apellido}
              onChange={handleChange}
              placeholder="Ingresa tu segundo apellido"
            />
          </div>
          <Divider my="lg" label="Datos de ubicación" labelPosition="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            <TextInput
              label="Ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              placeholder="Ingresa tu ciudad"
              required
            />
            <TextInput
              label="Colonia"
              name="colonia"
              value={formData.colonia}
              onChange={handleChange}
              placeholder="Ingresa tu colonia"
            />
            <TextInput
              label="Calle"
              name="calle"
              value={formData.calle}
              onChange={handleChange}
              placeholder="Ingresa tu calle"
            />
            <TextInput
              label="Número"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              placeholder="Número de domicilio"
            />
          </div>
          <Divider
            my="lg"
            label="Datos de reconocimiento"
            labelPosition="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            <TextInput
              label="Clave Electoral"
              name="clave_electoral"
              value={formData.clave_electoral}
              onChange={handleChange}
              placeholder="Ingresa tu clave electoral"
            />
            <TextInput
              label="CURP"
              name="curp"
              value={formData.curp}
              onChange={handleChange}
              placeholder="Ingresa tu CURP"
            />
            <TextInput
              label="Sección Electoral"
              name="seccion_electoral"
              value={formData.seccion_electoral}
              onChange={handleChange}
              placeholder="Sección electoral"
            />
          </div>
          <Divider my="md" label="Datos de contacto" labelPosition="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            <TextInput
              label="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ingresa tu teléfono"
              required
            />
          </div>
          <Divider my="md" label="Datos de usuario" labelPosition="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2">
            <TextInput
              label="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
              required
              type="password"
            />
            <TextInput
              label="Correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              required
              type="email"
            />
          </div>
          <div className="mt-7">
            <Button
              type="submit"
              className="mt-5 bg-blue-500 hover:bg-blue-600 w-full"
            >
              Enviar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
