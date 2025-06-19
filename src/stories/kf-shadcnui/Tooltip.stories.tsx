import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "kf-shadcnui";
import { LuInfo, LuCircleHelp, LuCircleAlert } from "react-icons/lu";

const meta = {
  title: "KF-ShadcnUI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <LuInfo className="h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent>
          <p>More information</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithButton: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to perform action</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithHelpIcon: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <LuCircleHelp className="h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Need help? Click here for more information</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithWarning: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <LuCircleAlert className="h-4 w-4 text-yellow-500" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Warning: This action cannot be undone</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger>Hover with delay</TooltipTrigger>
        <TooltipContent>
          <p>This tooltip has a 300ms delay</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithSide: Story = {
  render: () => (
    <div className="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Top</TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Right</TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Bottom</TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Left</TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};
