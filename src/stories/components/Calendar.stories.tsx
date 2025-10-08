import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Calendar } from "kf-component-library";

type CalendarProps = React.ComponentProps<typeof Calendar>;

Calendar.displayName = "Calendar";

const meta = {
  title: "components/Calendar",
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
