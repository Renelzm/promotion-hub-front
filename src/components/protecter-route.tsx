// components/ProtectedRoute.tsx
import { ReactNode, useEffect, useState } from "react";
import { useAuthStore } from "@/store/user-store";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <div>Cargando...</div>; // Puedes mostrar un loader mientras se verifica la autenticación
  }

  return <>{children}</>;
};

export default ProtectedRoute;
