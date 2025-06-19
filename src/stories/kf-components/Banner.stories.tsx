import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Banner } from "kf-shadcnui";

const meta = {
  title: "kf-components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "right",
    color: "red",
  },
};

export const LeftVariant: Story = {
  args: {
    variant: "left",
    color: "blue",
  },
};

export const RightVariant: Story = {
  args: {
    variant: "right",
    color: "green",
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="grid gap-4">
      <Banner variant="right" color="red" />
      <Banner variant="right" color="blue" />
      <Banner variant="right" color="green" />
      <Banner variant="right" color="yellow" />
      <Banner variant="right" color="purple" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-4">
      <Banner variant="left" color="red" />
      <Banner variant="right" color="red" />
    </div>
  ),
};

export const WithCustomHeight: Story = {
  args: {
    variant: "right",
    color: "red",
    className: "h-32",
  },
};

export const WithCustomWidth: Story = {
  args: {
    variant: "right",
    color: "red",
    className: "w-32",
  },
};
