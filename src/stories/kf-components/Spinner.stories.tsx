import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Spinner } from "kf-component-library";

const meta = {
  title: "kf-components/Spinner",
  component: Spinner,
  parameters: {
    layout: "largeDesktop",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "fullscreen",
    },
  },
  render: () => <Spinner>Loading from the server …</Spinner>,
};
