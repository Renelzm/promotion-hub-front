import React from "react";
import { Card, Text, Group, Badge, Button } from "@mantine/core";
import "react-circular-progressbar/dist/styles.css";

interface PriorityCardProps {
  title: string;
  description: string;
  totalActions: number;
  completedActions: number;
}

const PriorityCard: React.FC<PriorityCardProps> = ({
  title,
  description,
  totalActions,
  completedActions,
}) => {
  const progressPercentage = Math.round(
    (completedActions / totalActions) * 100,
  );

  return (
    <Card
      className="m-4 p-4 border rounded-lg shadow-lg bg-slate-50"
      style={{
        maxWidth: "calc(33% - 3rem)",
        minWidth: "350px",
        flexGrow: 1,
      }}
    >
      <Group mb="md">
        <Text size="xl" className="text-amber-800">
          Prioridad 1
        </Text>
        <Text size="md">{title}</Text>
        <Badge color="teal" variant="light">
          Prioridad Estratégica
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" mb="lg">
        {description}
      </Text>

      <Group className="my-4">
        {/* <div className="w-24 h-24">
          <CircularProgressbar
            value={progressPercentage}
            text={`${progressPercentage}%`}
            styles={buildStyles({
              textColor: "#0d9488",
              pathColor: "#0d9488",
              trailColor: "#d1d5db",
            })}
          />
        </div> */}
        <p className="text-orange-800">Avance: {progressPercentage} %</p>
      </Group>

      <Group>
        <Text size="sm" color="teal">
          Total de líneas de acción: {totalActions}
        </Text>
        <br />
        <Text size="sm">
          Líneas que faltan por completar: {totalActions - completedActions}
        </Text>
      </Group>
      <div className="mt-10">
        <Button fullWidth>Revisar</Button>
      </div>
    </Card>
  );
};

export default PriorityCard;
