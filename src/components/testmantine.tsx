"use client";

import { Avatar, Group } from "@mantine/core";

const names = [
  "Rene LAzalde",
  "Jane Mol",
  "Alex Lump",
  "Sarah Condor",
  "Mike Johnson",
  "Kate Kok",
  "Tom Smith",
];

export const Testmantine = () => {
  const avatars = names.map((name) => (
    <Avatar key={name} name={name} color="initials" />
  ));
  return <Group>{avatars}</Group>;
};
