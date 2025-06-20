import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Calendar } from "kf-component-library";

type CalendarProps = React.ComponentProps<typeof Calendar>;

const meta = {
  title: "shadcnui-components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: CalendarProps) => <Calendar {...args} />,
};

export const WithSelectedDate: Story = {
  render: (args: CalendarProps) => (
    <Calendar {...args} selected={new Date(2024, 5, 15)} />
  ),
};

export const CustomStyling: Story = {
  render: (args: CalendarProps) => (
    <div className="p-4 bg-gray-50 rounded-lg">
      <Calendar
        {...args}
        className="border-2 border-blue-500 rounded-lg shadow-lg"
      />
    </div>
  ),
};
