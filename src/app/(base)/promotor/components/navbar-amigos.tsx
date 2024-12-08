import React from "react";

import { MdHowToVote } from "react-icons/md";
export const NavbarAmigos = () => {
  return (
    <>
      <div className="flex flex-wrap  bg-slate-700">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between  bg-blueGray-600 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <div className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                  <div className="flex justify-center text-white">
                    <MdHowToVote size={30} color="#FF495F" />| RGA AMIGOS
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
