import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Input, Label } from "kf-shadcnui";

const meta = {
  title: "kf-shadcnui/Input",
  component: Input,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Input + Label</h2>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <Label htmlFor="input-demo">Input</Label>
        <Input id="input-demo" />
      </div>
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Input (no label)</h2>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <Input placeholder="Just input" />
      </div>
    </div>
  ),
};
