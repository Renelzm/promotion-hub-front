"use client";
import { Divider, List, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/Rheart.png";
import { RiNewspaperLine, RiWaterPercentLine } from "react-icons/ri";
import { PiSealPercent } from "react-icons/pi";

interface Props {
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

const ProfileCard: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="md:grid grid-cols-12 grid-rows-2  bg-white gap-2 p-4 rounded-xl ">
        <div className="md:col-span-1 shadow-xl ">
          <div className="flex w-full h-full relative">
            <Image src={logo} objectFit="contain" alt="" layout="fill" />
            {/* <img src="https://res.cloudinary.com/dboafhu31/image/upload/v1625318266/imagen_2021-07-03_091743_vtbkf8.png" className="w-44 h-44 m-auto" alt=""> */}
          </div>
        </div>

        <div className="md:col-span-11   ">
          <div className=" shadow-xl p-4 space-y-2 ">
            <div className="flex items-center col-span-12">
              <span className="w-full sm:w-96 text-md  bg-sky-700 font-bold text-white uppercase border-2 rounded-xl px-4 py-1 ">
                Amigo Activado
              </span>
            </div>
            <Divider />
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <span className="w-full sm:w-48 text-center sm:text-center text-sm uppercase border-2 rounded-xl px-4 py-1">
                Folio:
              </span>
              <span className="text-md uppercase font-bold px-4 py-1">
                {props.id_promovido}
              </span>
            </div>
            <Divider />
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <span className="w-full sm:w-48 text-center sm:text-center text-sm uppercase  font-bold rounded-xl px-4 py-1">
                Nombre:
              </span>
              <span className="text-md uppercase px-4 py-1">
                {props.nombre} {props.primer_apellido} {props.segundo_apellido}
              </span>
            </div>
            <Divider />
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <span className="w-full sm:w-48 text-center sm:text-center text-sm uppercase font-bold rounded-xl px-4 py-1">
                Telefono:
              </span>
              <span className="text-md uppercase px-4 py-1">
                {props.telefono}
              </span>
            </div>
            <Divider />
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <span className="w-full sm:w-48 text-center sm:text-center text-sm uppercase  font-bold rounded-xl px-3 py-1">
                Correo:
              </span>
              <span className="text-md uppercase px-4 py-1">
                {props.correo}
              </span>
            </div>
            <Divider />
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <span className="w-full sm:w-48 text-center sm:text-center text-sm uppercase  font-bold rounded-xl px-3 py-1">
                CURP:
              </span>
              <span className="text-md uppercase px-4 py-1">{props.curp}</span>
            </div>
            <Divider />
          </div>
        </div>

        <div className="md:col-span-12 text-left shadow-xl p-4 space-y-2 bg-white mt-3">
          <h3 className="font-bold uppercase text-slate-600">
            Cupones Disponibles para {props.nombre} {props.primer_apellido}
          </h3>

          <Divider />

          <List className="space-y-2">
            <List.Item icon={<RiNewspaperLine size={30} color="gray" />}>
              Acta de nacimiento gratuita
            </List.Item>
            <List.Item icon={<PiSealPercent size={30} color="pink" />}>
              10% de descuento en ...
            </List.Item>
            <List.Item icon={<RiWaterPercentLine size={30} color="teal" />}>
              30% de descuento en tu recibo de agua
            </List.Item>
          </List>
        </div>
        <div className="md:col-span-12 text-left shadow-xl  space-y-2 p-6  bg-white">
          <div>
            <Text className="text-justify text-sm">
              ¡Hola! Quiero agradecerte por formar parte de mi red de amigos y
              por tu apoyo. Es un gran honor contar contigo, y estoy muy
              emocionado de compartir que, cuando iniciemos funciones, ¡tendrás
              acceso exclusivo a cupones por formar parte de este esfuerzo!
              <br />
              Tu confianza significa mucho para mí, y esta es mi forma de
              devolverte un poco de ese apoyo. Mantente al pendiente, pronto
              recibirás más detalles. ¡Gracias por estar aquí y ser parte de
              este proyecto!
              <br />
              Guarda tu FOLIO:
              <span className=" font-bold text-xl">
                {props.id_promovido}
              </span>{" "}
              para porder dar seguimiento a tus beneficios.
              <br />
              <br />
            </Text>
            <Text className="text-center">
              ¡Gracias por formar parte de mi red de amigos y por tu apoyo!
            </Text>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Text className=" font-bold ">
          NOTA: Los cupones forman parte de mi proyecto de trabajo por lo que
          seran validos con el folio otorgado si ganamos y al momento de iniciar
          funciones.
        </Text>
      </div>
    </div>
  );
};

export default ProfileCard;
