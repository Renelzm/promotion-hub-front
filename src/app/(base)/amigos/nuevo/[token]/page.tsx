import { Divider, Title } from "@mantine/core";
import { AmigoForm } from "../../components/formulario-amigos";

export default function NuevoAmigo() {
  return (
    <div>
      <Divider
        my="md"
        label={
          <Title order={1} className="text-black">
            Afiliación
          </Title>
        }
        labelPosition="center"
      />
      <AmigoForm />
    </div>
  );
}
