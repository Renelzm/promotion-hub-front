import { Divider, Title } from "@mantine/core";
import { PromotorForm } from "../components/formulario-promotor";

export default function NuevoAmigo() {
  return (
    <div>
      <Divider
        my="md"
        label={
          <Title order={1} className="text-black">
            Bienvenido al equipo de ..
          </Title>
        }
        labelPosition="center"
      />

      <PromotorForm />
    </div>
  );
}
