import { NavbarAmigos } from "./components/navbar-amigos";

export default function NameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarAmigos />
      <div className=" p-2 min-h-svh">{children}</div>;
    </>
  );
}
