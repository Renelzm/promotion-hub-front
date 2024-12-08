"use client";
import ProtectedRoute from "@/components/protecter-route";
import { Footer } from "./components/mainUI/footer";
import { Navbar } from "./components/mainUI/navbar";

export default function NameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="min-h-screen bg-slate-100">
        <Navbar />
        <ProtectedRoute>{children}</ProtectedRoute>
        <Footer />
      </div>
    </div>
  );
}
