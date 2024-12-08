"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Amigo } from "@/app/interfaces/amigos";
import axios from "axios";
import { configStore } from "@/store/config-store";
import { Alert, Container, Loader, Title, Divider, Text } from "@mantine/core";
import { useAuthStore, useUsuarioStore } from "@/store/user-store";
import { Tableresponsive } from "../../components/amigos/table-responsive";
import { RateUsers } from "../../components/amigos/rate-users";

export default function EstructuraPage() {
  const params = useParams();
  const { id } = params;
  const [amigos, setAmigos] = useState<Amigo[]>([]);
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
        const response = await axios.get(
          `${baseUrl}/promocion/promovidos/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(response.data);
        setAmigos(response.data.promovidosEncontrados || []);
        setpromotor(response.data.nombre || "promotor.");
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data.message || "Error desconocido");
        } else {
          console.error(err);
          setError("Ocurrió un error inesperado.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPromovidos();
    }
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Loader color="blue" />
        <p className="text-slate-800">
          Cargando información de los promotores...
        </p>
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
        Amigos
        <Text className="mb-6 text-center">De: {nombrePromotor}</Text>
      </Title>

      <RateUsers
        totalAmigos={amigos.length}
        votaron={amigos.filter((e) => e.voto === true).length}
      />
      <Divider
        my="xs"
        label={<Title order={1}>Detalle Amigos</Title>}
        labelPosition="center"
      />
      <Tableresponsive amigos={amigos} />
    </div>
  );
}
