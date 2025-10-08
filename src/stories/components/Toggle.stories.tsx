import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Toggle } from "kf-component-library";
import { LuBold, LuItalic, LuUnderline } from "react-icons/lu";

Toggle.displayName = "Toggle";

const meta = {
  title: "components/Toggle",
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
