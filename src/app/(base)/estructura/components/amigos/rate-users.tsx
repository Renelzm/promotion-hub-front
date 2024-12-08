import React from "react";
import { FaVoteYea } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { HiOutlineEmojiHappy } from "react-icons/hi";

interface Props {
  totalAmigos: number;
  votaron: number;
}
export const RateUsers = ({ totalAmigos = 0, votaron = 0 }: Props) => {
  return (
    <div>
      <section className="bg-white p-5 m-3 rounded">
        <h4 className="text-xl">Tabla de avance</h4>
        <div className="flex flex-col lg:flex-row items-center gap-5 mt-5">
          <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
            <HiOutlineEmojiHappy size={50} color="green" />
            <div className="text-center">
              <h2 className="text-4xl font-bold pb-2">{totalAmigos}</h2>
              <h4 className="inline text-gray-500 text-md">Total de Amigos</h4>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
            <FaArrowUpRightDots size={50} color="orange" />
            <div className="text-center">
              <h2 className="text-4xl font-bold pb-2">20</h2>
              <h4 className="inline text-gray-500 text-md">Meta amigos</h4>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
            <FaVoteYea size={50} color="teal" />
            <div className="text-center">
              <h2 className="text-4xl font-bold pb-2">
                {totalAmigos ? (votaron / totalAmigos) * 100 : 0}%
              </h2>
              <h4 className="inline text-gray-500 text-md">Ya votaron</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
