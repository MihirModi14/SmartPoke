import { Meta, StoryObj } from "@storybook/react";

import { FormControl } from "./FormControl.component";

const meta = {
  title: "Form Control",
  component: FormControl,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomFormControl: Story = {
  args: {
    label: "Email",
    name: "email",
    placeholder: "enter email",
    type: "email",
    value: "mihir@gmail.com",
  },
};
