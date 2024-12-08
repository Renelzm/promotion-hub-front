"use client";

import { useAuthStore } from "@/store/user-store";
import { ButtonCopy } from "../../components/amigos/button-copy";
import { configStore } from "@/store/config-store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PromotorPage() {
  const user = useAuthStore((state) => state.user);
  const baseFrontUrl = configStore((state) => state.baseFrontUrl);
  const qrValue = `${baseFrontUrl}/promotor/${user?.token}`;
  const router = useRouter();

  useEffect(() => {
    if (!user?.rol) {
      router.push("/login");
    }
    if (
      user?.rol.nombre_rol !== "jefedezona" &&
      user?.rol.nombre_rol !== "admin"
    ) {
      // router.push("/estructura");
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center">
      <ButtonCopy value={qrValue} />
    </div>
  );
}
