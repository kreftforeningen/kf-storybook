import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "kf-component-library";

AspectRatio.displayName = "AspectRatio";

type AspectRatioProps = React.ComponentProps<typeof AspectRatio>;

const meta = {
  title: "components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: AspectRatioProps) => (
    <div className="w-[600px]">
      <AspectRatio ratio={21 / 9} {...args}>
        <img
          src="https://picsum.photos/2100/900"
          alt="Ultra-wide landscape"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
};
