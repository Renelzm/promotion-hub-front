import { Button, Card, Divider, Text, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineContentCopy } from "react-icons/md";

interface props {
  value: string;
}
export function ButtonCopy({ value }: props) {
  const clipboard = useClipboard();
  return (
    <div className="m-5 text-center ">
      <Divider
        label="Enlace para compartir"
        labelPosition="center"
        className="mb-5"
      />

      <Tooltip
        label="Link copiado!"
        offset={5}
        position="bottom"
        radius="xl"
        transitionProps={{ duration: 100, transition: "slide-down" }}
        opened={clipboard.copied}
      >
        <Button
          variant="default"
          rightSection={
            clipboard.copied ? (
              <CiCircleCheck size={20} />
            ) : (
              <MdOutlineContentCopy size={20} />
            )
          }
          radius="xl"
          size="md"
          pr={14}
          h={48}
          styles={{ section: { marginLeft: 22 } }}
          onClick={() => clipboard.copy(value)}
        >
          Click aqui para compartir mi link
        </Button>
      </Tooltip>
      <Card shadow="sm" padding="lg" radius="md" className="max-w-2xl mt-3 p-3">
        <Text size="sm" color="blue" className="break-all cursor-text">
          {value}
        </Text>
      </Card>
    </div>
  );
}
