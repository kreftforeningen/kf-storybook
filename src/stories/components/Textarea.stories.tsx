import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Textarea } from "kf-component-library";

Textarea.displayName = "Textarea";

const meta = {
  title: "components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
  },
};
