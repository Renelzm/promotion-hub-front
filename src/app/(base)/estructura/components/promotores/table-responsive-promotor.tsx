import { Estructura } from "@/app/interfaces/promotores";
import { Button, Container, Text } from "@mantine/core";
import { redirect } from "next/navigation";

import React from "react";

interface TableEstructuraProps {
  jefeZona: Estructura;
}
export const TableResponsivePromotor: React.FC<TableEstructuraProps> = ({
  jefeZona,
}) => {
  console.log(jefeZona);
  return (
    <div>
      <Container fluid className="mb-8">
        <div className="overflow-x-auto w-full">
          <table className="border w-full table-auto ">
            <thead className="bg-white ">
              <tr>
                <th className="p-2 font-bold hidden border-b text-sm lg:table-cell">
                  Nombre
                </th>
                <th className="p-2 font-bold hidden border-b text-sm lg:table-cell">
                  Correo
                </th>
                <th className="p-2 font-bold hidden border-b text-sm lg:table-cell">
                  Teléfono
                </th>
                <th className="p-2 font-bold hidden border-b text-sm lg:table-cell">
                  Dirección
                </th>
                <th className="p-2 font-bold hidden border-b text-sm lg:table-cell">
                  Total Promovidos
                </th>
                <th className="p-2 font-bold hidden border-b text-sm lg:table-cell">
                  Prorcentaje de avance
                </th>
                <th className="p-2 font-bold hidden border-b text-sm lg:table-cell">
                  Ver Promovidos
                </th>
                <th className="p-2 font-bold hidden border-b text-sm  lg:table-cell">
                  ¿Ya votó?
                </th>
              </tr>
            </thead>
            <tbody>
              {jefeZona.promotores.map((amigo) => (
                <tr
                  key={amigo.id_promotor}
                  className="bg-white lg:hover:bg-gray-50 mt-5 flex lg:table-row flex-wrap lg:flex-no-wrap border-b"
                >
                  <td className="w-full lg:w-auto  lg:p-2 text-center lg:text-center border-b  relative">
                    <span className="lg:hidden flex w-full  bg-neutral-800 text-white  px-2 py-1 text-md font-bold uppercase">
                      AMIGO
                    </span>
                    <span className="lg:hidden flex w-full  bg-sky-50  px-2 py-1 text-xs font-bold uppercase">
                      Nombre
                    </span>
                    <span className="font-medium">
                      {amigo.nombre} {amigo.primer_apellido}
                      {amigo.segundo_apellido}
                    </span>
                  </td>
                  <td className="w-full lg:w-auto lg:p-2 text-center lg:text-center border-b lg:table-cell relative">
                    <span className="lg:hidden flex bg-sky-100 px-2 py-1 text-xs font-bold uppercase">
                      Correo
                    </span>
                    {amigo.correo}
                  </td>
                  <td className="w-full lg:w-auto lg:p-2 text-center lg:text-center border-b lg:table-cell relative">
                    <span className="lg:hidden flex  bg-sky-50 px-2 py-1 text-xs font-bold uppercase">
                      Teléfono
                    </span>
                    {amigo.telefono}
                  </td>
                  <td className="w-full lg:w-auto  lg:p-2 text-center lg:text-center border-b lg:table-cell relative">
                    <span className="lg:hidden flex  bg-sky-100 px-2 py-1 text-xs font-bold uppercase">
                      Dirección
                    </span>
                    {amigo.calle}, {amigo.numero}, {amigo.colonia},
                    {amigo.ciudad},{amigo.entidad}
                  </td>

                  <td className="w-full lg:w-auto lg:p-2 text-center lg:text-center border-b lg:table-cell relative">
                    <span className="lg:hidden flex  bg-sky-50 px-2 py-1 text-xs font-bold uppercase">
                      Total promovidos
                    </span>
                    {amigo.promovidos.length}
                  </td>
                  <td className="w-full lg:w-auto lg:p-2 text-center lg:text-center border-b lg:table-cell relative">
                    <span className="lg:hidden flex  bg-sky-50 px-2 py-1 text-xs font-bold uppercase">
                      Porcentaje Avance
                    </span>
                    {amigo.promovidos.length > 0
                      ? (amigo.promovidos.reduce(
                          (accumulator, currentValue) =>
                            accumulator + (currentValue.voto ? 1 : 0),
                          0,
                        ) /
                          amigo.promovidos.length) *
                        100
                      : 0}
                    %
                  </td>
                  <td className="w-full lg:w-auto lg:p-2 text-center lg:text-center border-b lg:table-cell relative">
                    <span className="lg:hidden flex  bg-sky-50 px-2 py-1 text-xs font-bold uppercase">
                      Ver Promovidos
                    </span>
                    <Button
                      variant="outline"
                      color="cyan"
                      radius="xl"
                      size="compact-md"
                      onClick={() =>
                        redirect(`/estructura/misamigos/${amigo.id_promotor}`)
                      }
                    >
                      Ver datos
                    </Button>
                  </td>
                  <td className="w-full lg:w-auto  lg:p-2 text-center lg:text-center border-b lg:table-cell relative">
                    <span className="lg:hidden flex  bg-rose-800  text-white px-2 py-1 text-xs font-bold uppercase">
                      ¿Ya votó?
                    </span>
                    <Text color={amigo.voto ? "green" : "red"}>
                      {amigo.voto ? "Sí" : "No"}
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};
