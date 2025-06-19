import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Toggle } from "kf-shadcnui";
import { LuBold, LuItalic, LuUnderline } from "react-icons/lu";

const meta = {
  title: "shadcnui-components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Toggle",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Toggle",
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle size="sm" aria-label="Toggle bold">
        <LuBold className="h-4 w-4" />
      </Toggle>
      <Toggle size="sm" aria-label="Toggle italic">
        <LuItalic className="h-4 w-4" />
      </Toggle>
      <Toggle size="sm" aria-label="Toggle underline">
        <LuUnderline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
    children: "Pressed",
  },
};

export const WithLongText: Story = {
  args: {
    children: "This is a toggle with longer text",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};
