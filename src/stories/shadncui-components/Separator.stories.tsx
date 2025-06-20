import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Separator } from "kf-component-library";

const meta = {
  title: "shadcnui-components/Separator",
  component: Separator,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Separator</h2>
      <Separator />
    </div>
  ),
};
