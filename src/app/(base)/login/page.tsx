import { Divider, Title } from "@mantine/core";
import { LoginCard } from "./login-card";

export default function LogInPage() {
  return (
    <div>
      <Divider
        my="md"
        label={
          <Title order={1} className="text-black">
            Log-in
          </Title>
        }
        labelPosition="center"
      />
      <LoginCard />
    </div>
  );
}
