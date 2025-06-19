import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Progress } from "kf-shadcnui";

const meta = {
  title: "shadcnui-components/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Progress</h2>
      <Progress value={50} />
    </div>
  ),
};
