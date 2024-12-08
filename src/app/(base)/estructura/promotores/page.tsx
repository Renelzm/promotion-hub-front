"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RespuestaPromotores } from "@/app/interfaces/promotores";
import axios from "axios";
import { configStore } from "@/store/config-store";
import { useAuthStore, useUsuarioStore } from "@/store/user-store";
import { Loader, Alert, Container, Divider, Title, Text } from "@mantine/core";
import { RateUsers } from "../components/amigos/rate-users";

export default function PromotoresPage() {
  const [promotores, setpromotores] = useState<RespuestaPromotores>();
  const [nombrePromotor, setpromotor] = useState("Promotor");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = configStore((state) => state.baseApiUrl);
  const user = useAuthStore((state) => state.user);
  const token = user?.token;
  useEffect(() => {
    const fetchPromovidos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${baseUrl}/promocion/promotores/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setpromotores(response.data || {});
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

      <RateUsers totalAmigos={promotores?.promotores} votaron={0} />
      <Divider
        my="xs"
        label={<Title order={1}>Detalle Amigos</Title>}
        labelPosition="center"
      />
      {/* <Tableresponsive amigos={amigos} /> */}
    </div>
  );
}
