import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const meta = {
  title: "kf-tailwind/Fonts",
  args: { onClick: fn() },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sans: Story = {
  render: () => (
    <div className="flex flex-col gap-4 text-lg font-sans">
      <p className="text-sm">font-sans</p>
      <p>IBM Plex Sans is the default font used for body text.</p>
    </div>
  ),
};

export const Condensed: Story = {
  render: () => (
    <div className="flex flex-col gap-4 text-lg font-condensed">
      <p className="text-sm">font-condensed</p>
      <p>IBM Plex Condensed is the condensed font used for headings.</p>
    </div>
  ),
};

export const Serif: Story = {
  render: () => (
    <div className="flex flex-col gap-4 text-lg font-serif">
      <p className="text-sm">font-serif</p>
      <p>IBM Plex Serif is the serif font used for blockquotes.</p>
    </div>
  ),
};
