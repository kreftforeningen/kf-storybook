import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { ModeToggle } from "kf-component-library";

const meta = {
  title: "shadcnui-components/ModeToggle",
  component: ModeToggle,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ModeToggle />,
};

export const WithCustomProps: Story = {
  render: () => <ModeToggle align="start" variant="outline" size="default" />,
};

export const WithCustomText: Story = {
  render: () => (
    <ModeToggle align="start" variant="outline" size="default">
      Custom Toggle Text
    </ModeToggle>
  ),
};
