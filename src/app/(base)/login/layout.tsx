import { NavbarAmigos } from "../amigos/components/navbar-amigos";
import { Footer } from "../estructura/components/mainUI/footer";

export default function NameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <NavbarAmigos />
      {children}
      <Footer />
    </div>
  );
}
