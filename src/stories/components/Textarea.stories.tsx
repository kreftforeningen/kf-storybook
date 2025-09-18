import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Textarea } from "kf-component-library";

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

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <label htmlFor="message">Your message</label>
      <Textarea placeholder="Type your message here..." id="message" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
  },
};

export const WithError: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Textarea
        placeholder="Type your message here..."
        className="border-red-500 focus-visible:ring-red-500"
      />
      <p className="text-sm text-red-500">This field is required</p>
    </div>
  ),
};

export const WithCharacterCount: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Textarea
        placeholder="Type your message here..."
        maxLength={100}
        className="resize-none"
      />
      <p className="text-sm text-muted-foreground">0/100 characters</p>
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    placeholder: "This is a larger textarea",
    className: "min-h-[200px]",
  },
};
