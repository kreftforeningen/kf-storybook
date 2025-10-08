import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Progress } from "kf-component-library";

const meta = {
  title: "components/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Progress value={50} />`,
      },
    },
  },
  render: () => <Progress value={50} />,
};
