"use client";
import React from "react";
import { useAuthStore } from "@/store/user-store";
import { Button, List, Text } from "@mantine/core";
import { BsQrCode } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdHowToVote } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiUserAdd } from "react-icons/ti";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { PiTreeStructureDuotone } from "react-icons/pi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();
  const rol = user?.rol.nombre_rol;

  const handleLogout = () => {
    useAuthStore.getState().logout();
    router.push("/login"); // Redirigir a la página de login
  };
  return (
    <>
      <div className="flex flex-wrap py-2 bg-slate-700">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blueGray-600 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-lg font-bold leading-relaxed inline-block mr-4  whitespace-nowrap uppercase"
                  href="#pablo"
                >
                  <div className="flex justify-center text-white">
                    <MdHowToVote size={30} color="#FF495F" />| RGA AMIGOS
                  </div>
                  <div className="flex justify-center text-white text-sm">
                    {user?.nombre} {user?.primer_apellido}
                  </div>
                </a>
                <button
                  className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <RxHamburgerMenu size={35} color="white" />
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <List className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <List.Item className="flex items-center">
                    <Link
                      href={`/estructura/`}
                      className="flex items-center text-sm uppercase font-bold rounded-md m-3 hover:bg-slate-800 text-white"
                    >
                      <IoHome size={20} color="" />
                      <span className="ml-2">home</span>
                    </Link>
                  </List.Item>
                  {rol === "jefedezona" || rol === "admin" ? (
                    <List.Item className="flex items-center">
                      <Link
                        href="/estructura/promotores/nuevo"
                        className="flex items-center text-sm uppercase font-bold rounded-md m-3 hover:bg-slate-800 text-white"
                      >
                        <TiUserAdd size={20} color="teal" />
                        <span className="ml-2">nuevo promotor</span>
                      </Link>
                    </List.Item>
                  ) : null}
                  {rol === "jefedezona" || rol === "admin" ? (
                    <List.Item className="flex items-center">
                      <Link
                        href={`/estructura/promotores/${user?.id_usuario}`}
                        className="flex items-center text-sm uppercase font-bold rounded-md m-3 hover:bg-slate-800 text-white"
                      >
                        <PiTreeStructureDuotone size={20} color="teal" />
                        <span className="ml-2">Mis promotores</span>
                      </Link>
                    </List.Item>
                  ) : null}
                  <List.Item className="flex items-center">
                    <Link
                      href={`/estructura/misamigos/${user?.id_usuario}`}
                      className="flex items-center text-sm uppercase font-bold rounded-md m-3 hover:bg-slate-800 text-white"
                    >
                      <FaUserFriends size={20} color="#cc9712" />
                      <span className="ml-2">mis amigos</span>
                    </Link>
                  </List.Item>
                  <List.Item className="flex items-center">
                    <Link
                      href={`/estructura/amigos/qramigos`}
                      className="flex items-center text-sm uppercase font-bold rounded-md m-3 hover:bg-slate-800 text-white"
                    >
                      <BsQrCode size={20} color="" />
                      <span className="ml-2">QR +Amigos</span>
                    </Link>
                  </List.Item>

                  {isAuthenticated ? (
                    <Button
                      variant="transparent"
                      color="white"
                      size="md"
                      className="text-xs uppercase rounded-lg  hover:bg-slate-800 text-white"
                      onClick={() => {
                        handleLogout(); // Ejecutar el logout
                        // Cerrar el menú
                      }}
                    >
                      <Text>Logout</Text>
                      <IoMdLogOut />
                    </Button>
                  ) : (
                    ""
                  )}
                </List>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
