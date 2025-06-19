import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ScrollArea, Separator } from "kf-shadcnui";

const meta = {
  title: "kf-shadcnui/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const tags = [
  "nextjs",
  "react",
  "javascript",
  "typescript",
  "tailwind",
  "radix-ui",
  "storybook",
  "shadcn/ui",
  "design",
  "ui",
  "components",
  "open source",
];

export const Default: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Scroll Area</h2>
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-base leading-none m-0">Tags</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};
