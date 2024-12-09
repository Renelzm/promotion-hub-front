import React from "react";
import { FaVoteYea } from "react-icons/fa";
import { FaArrowUpRightDots, FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { VscUngroupByRefType } from "react-icons/vsc";

interface Props {
  totalPromotores: number;
  votaron: number;
  totalAmigos: number;
  promovidos: number;
}
export const RatePromotores = ({
  totalPromotores = 0,
  promovidos = 0,
  totalAmigos = 0,
}: Props) => {
  return (
    <div>
      <section className="bg-white p-5 m-3 rounded">
        <h4 className="text-xl">Tabla de avance</h4>
        <div className="flex flex-col lg:flex-row items-center gap-5 mt-5">
          <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
            <RiAccountPinCircleLine size={50} color="#334155" />
            <div className="text-center">
              <h2 className="text-4xl font-bold pb-2">{totalPromotores}</h2>
              <h4 className="inline text-gray-500 text-md">
                Total de promotores
              </h4>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
            <FaPeopleGroup size={50} color="orange" />
            <div className="text-center">
              <h2 className="text-4xl font-bold pb-2">{totalAmigos}</h2>
              <h4 className="inline text-gray-500 text-md">Total de amigos</h4>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded-md">
            <VscUngroupByRefType size={50} color="" />
            <div className="text-center">
              <h2 className="text-4xl font-bold pb-2">{promovidos}</h2>
              <h4 className="inline text-gray-500 text-md">
                Amigos de promotores
              </h4>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
            <FaVoteYea size={50} color="teal" />
            <div className="text-center">
              <h2 className="text-4xl font-bold pb-2">
                {/* {totalAmigos ? (votaron / totalAmigos) * 100 : 0}% */}
              </h2>
              <h4 className="inline text-gray-500 text-md">Ya votaron</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
