import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Slider } from "kf-component-library";

const meta = {
  title: "components/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Slider defaultValue={[33]} max={100} step={1} />`,
      },
    },
  },
  render: () => <Slider defaultValue={[33]} max={100} step={1} />,
};
