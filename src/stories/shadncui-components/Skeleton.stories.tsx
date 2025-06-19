import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Skeleton } from "kf-shadcnui";

const meta = {
  title: "shadcnui-components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Skeleton</h2>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  ),
};
