import { Amigo } from "@/app/interfaces/amigos";
import { Container, Table, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";

interface TableAmigosProps {
  amigos: Amigo[];
}

export const TableAmigos: React.FC<TableAmigosProps> = ({ amigos }) => {
  const [search, setSearch] = useState("");

  // Filtrado por nombre
  const filteredElements = amigos.filter((amigo) =>
    `${amigo.nombre} ${amigo.primer_apellido} ${amigo.correo}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const rows = filteredElements.map((element) => (
    <Table.Tr key={element.id_promovido}>
      <Table.Td>
        {element.nombre} {element.primer_apellido} {element.segundo_apellido}
      </Table.Td>
      <Table.Td>{element.correo}</Table.Td>
      <Table.Td>{element.telefono}</Table.Td>
      <Table.Td>
        {element.calle}, {element.colonia}, {element.ciudad}, {element.entidad}
      </Table.Td>
      <Table.Td>
        <Text color={element.voto ? "green" : "red"}>
          {element.voto ? "Sí" : "No"}
        </Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Container fluid>
        <TextInput
          placeholder="Buscar por nombre o correo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          mb="md"
        />
        {/* Contenedor para la tabla responsiva */}
        <div style={{ overflowX: "auto", width: "100%" }}>
          <Table className="bg-white" striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Nombre</Table.Th>
                <Table.Th>Correo</Table.Th>
                <Table.Th>Teléfono</Table.Th>
                <Table.Th>Dirección</Table.Th>
                <Table.Th>¿Ya votó?</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};
