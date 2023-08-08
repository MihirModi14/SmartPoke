import { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card.component";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pokemon: Story = {
  args: {
    id: 0,
    name: "ivysaur",
    height: 10,
    weight: 130,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    abilities: [
      { ability: { name: "overgrow" } },
      { ability: { name: "chlorophyll" } },
      { ability: { name: "overgrow" } },
    ],
    type: "details",
    experience: 0,
    order: 0,
  },
};
