import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Slider } from "kf-shadcnui";

const meta = {
  title: "shadcnui-components/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Slider</h2>
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  ),
};
