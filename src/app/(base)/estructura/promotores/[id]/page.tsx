"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Estructura,
  Promotor,
  RespuestaPromotores,
} from "@/app/interfaces/promotores";
import axios from "axios";
import { configStore } from "@/store/config-store";
import { useAuthStore } from "@/store/user-store";
import { Loader, Alert, Container, Divider, Title, Text } from "@mantine/core";
import { RatePromotores } from "../../components/promotores/rate-promotores";
import { TableResponsivePromotor } from "../../components/promotores/table-responsive-promotor";

export default function PromotoresPage() {
  const [promotores, setpromotores] = useState<RespuestaPromotores>();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [promovidosPromotores, setPP] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = configStore((state) => state.baseApiUrl);
  const user = useAuthStore((state) => state.user);
  const token = user?.token;

  useEffect(() => {
    const fetchPromovidos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${baseUrl}/promocion/promotores/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setpromotores(response.data || {});
        countPromovidos(response.data.estructura[0].estructura.promotores);
        // setpromotor(response.data.nombre || "promotor.");
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data.message || "Error desconocido");
          console.log(err);
        } else {
          console.error(err);
          setError("Ocurrió un error inesperado.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPromovidos();
  }, []);

  const countPromovidos = (promotores: Promotor[]) => {
    if (!promotores) return 0;
    let count = 0;
    promotores.forEach((promotor) => {
      count += promotor.promovidos.length;
    });
    setPP(count);
    return count;
  };

  if (loading) {
    return (
      <Container>
        <Loader />
        <p>Cargando información de los promovidos...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert title="Error" color="red">
          {error}
        </Alert>
      </Container>
    );
  }
  return (
    <div className="text-center">
      <Title order={1} className="mb-6 text-sky-800 text-center">
        Promotores
        <Text className="mb-6 text-center">De: {user?.nombre}</Text>
      </Title>

      <RatePromotores
        totalPromotores={promotores?.promotores || 0}
        totalAmigos={promotores?.promovidos || 0}
        votaron={0}
        promovidos={promovidosPromotores}
      />
      <Divider
        my="xs"
        label={<Title order={1}>Detalle Promotores</Title>}
        labelPosition="center"
      />
      <TableResponsivePromotor
        jefeZona={promotores?.estructura[0].estructura!}
      />
    </div>
  );
}
