import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Switch } from "kf-component-library";

const meta = {
  title: "shadcnui-components/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Switch</h2>
      <Switch />
    </div>
  ),
};
