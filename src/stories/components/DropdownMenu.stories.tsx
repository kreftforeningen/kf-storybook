import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
} from "kf-component-library";

const meta = {
  title: "components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">DropdownMenu</h2>
      <div className="flex flex-row flex-wrap gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" shape="square">
              Open
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem variant="default">Default</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              Destructive
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>More</DropdownMenuLabel>
            <DropdownMenuItem>Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ),
};
