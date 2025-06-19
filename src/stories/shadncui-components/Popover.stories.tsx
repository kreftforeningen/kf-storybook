import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Popover, PopoverTrigger, PopoverContent, Button } from "kf-shadcnui";

const meta = {
  title: "shadcnui-components/Popover",
  component: Popover,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Popover</h2>
      <Popover>
        <PopoverTrigger>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  ),
};
