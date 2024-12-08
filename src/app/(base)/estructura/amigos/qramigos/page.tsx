import { Divider, Title } from "@mantine/core";
import { QrCode } from "../../components/amigos/qr";

export default function QrAmigos() {
  return (
    <div>
      <Divider
        my="md"
        label={
          <Title order={1} className="text-black">
            QR Amigos
          </Title>
        }
        labelPosition="center"
      />
      <QrCode />
    </div>
  );
}
