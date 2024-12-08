"use client";
import React, { useState } from "react";
import { Table, Button, Badge, FileButton, Text } from "@mantine/core";

interface LineaDeAccion {
  id: string;
  descripcion: string;
  archivo?: File;
  estado: "En espera" | "Enviado";
}

const LineasDeAccionMantine = () => {
  const [lineas, setLineas] = useState<LineaDeAccion[]>([
    {
      id: "1.1.1.1",
      descripcion:
        "Adopción del Manifiesto de No conflicto de Intereses en los procesos de contratación de todas las instancias que forman parte del Sistema Anticorrupción del Estado de Coahuila.",
      estado: "En espera",
    },
    {
      id: "1.1.1.2",
      descripcion:
        "Implementación de la obligatoriedad en la presentación del Manifiesto de No conflicto de Intereses en el proceso de contratación de servidores públicos en todas las entidades del estado.",
      estado: "En espera",
    },
    {
      id: "1.2.1.1",
      descripcion:
        "Elaboración de un diagnóstico estatal sobre las necesidades de reglamentación en las contrataciones en las instituciones públicas del Estado.",
      estado: "Enviado",
    },
  ]);

  const handleFileUpload = (file: File, id: string) => {
    setLineas((prevLineas) =>
      prevLineas.map((linea) =>
        linea.id === id ? { ...linea, archivo: file } : linea,
      ),
    );
  };

  const handleComplete = (id: string) => {
    setLineas((prevLineas) =>
      prevLineas.map((linea) =>
        linea.id === id ? { ...linea, estado: "Enviado" } : linea,
      ),
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Líneas de Acción</h1>
      <Table highlightOnHover verticalSpacing="sm">
        <thead>
          <tr className="bg-gray-200">
            <th>ID</th>
            <th>Descripción</th>
            <th>Archivo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lineas.map((linea) => (
            <tr key={linea.id}>
              <td className="font-medium">{linea.id}</td>
              <td>{linea.descripcion}</td>
              <td>
                <FileButton
                  onChange={(file) => handleFileUpload(file!, linea.id)}
                >
                  {(props) => (
                    <Button size="xs" color="blue" {...props}>
                      {linea.archivo ? "Cambiar Archivo" : "Subir Archivo"}
                    </Button>
                  )}
                </FileButton>
                {linea.archivo && (
                  <Text size="sm" className="mt-1 text-gray-600">
                    {linea.archivo.name}
                  </Text>
                )}
              </td>
              <td>
                <Badge
                  color={linea.estado === "Enviado" ? "green" : "orange"}
                  variant="filled"
                >
                  {linea.estado}
                </Badge>
              </td>
              <td>
                <Button
                  size="xs"
                  color="green"
                  disabled={linea.estado === "Enviado"}
                  onClick={() => handleComplete(linea.id)}
                >
                  Enviar Reporte
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LineasDeAccionMantine;
