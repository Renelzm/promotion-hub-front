import { Divider, Title } from "@mantine/core";
import ProfileCard from "./components/profile_card";
import { IoIosPeople } from "react-icons/io";
export default function AmigosPage() {
  const promovido = {
    id_promovido: "7b2276a5-da11-4173-8283-fd7dc7979ce1",
    nombre: "JUAN",
    primer_apellido: "PALACIOS",
    segundo_apellido: "VILLANUEVA",
    ciudad: "BERMEJILLO",
    colonia: "colonia conocida",
    calle: "Siempre viva",
    numero: "789",
    clave_electoral: "154453a443b25d5a58",
    curp: "C4RP242er4f4btrabr",
    entidad: "Durango",
    foto_ine: "null.jpg",
    seccion_electoral: "2034",
    correo: "correo_promotor@gmail.com",
    telefono: "8713568923",
    isActive: true,
    promoventeInmediatoRol: "promotor",
    createdAt: "2024-11-28T01:12:53.005Z",
    structureRol: "promovido",
    voto: false,
  };

  return (
    <div className="text-center p-2">
      <div className="flex items-center justify-center ">
        <IoIosPeople size={120} />
      </div>
      <Divider
        my="md"
        label={
          <Title order={1} className="text-black">
            Mis Datos
          </Title>
        }
        labelPosition="center"
      />
      <ProfileCard {...promovido} />
    </div>
  );
}
