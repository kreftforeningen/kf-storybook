import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  FactBox,
  FactBoxContent,
  FactBoxTitle,
  FactBoxDescription,
  FactBoxAction,
} from "kf-component-library";

import "kf-tailwind/index.css";
import "tailwindcss";

const meta = {
  title: "kf-components/FactBox",
  component: FactBox,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof FactBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FactBox>
      <FactBoxContent>
        <FactBoxTitle>Fact About Cancer</FactBoxTitle>
        <FactBoxDescription>
          <p className="mb-4">
            Something you should know about cancer. Is that it is a disease that
            affects many people. It can be treated and cured in many cases. But
            it can also be fatal.
          </p>
          <p className="mb-4">
            Do you think you have cancer? You probably don't. But you should
            still get checked out.
          </p>
          <p>
            If you do not have cancer, you are lucky. But you should still get
            checked out.
          </p>
        </FactBoxDescription>
      </FactBoxContent>
      <FactBoxAction>Fact Box</FactBoxAction>
    </FactBox>
  ),
};

export const WithShortContent: Story = {
  render: () => (
    <FactBox>
      <FactBoxContent>
        <FactBoxTitle>Quick Fact</FactBoxTitle>
        <FactBoxDescription>
          <p>A brief fact that doesn't require much explanation.</p>
        </FactBoxDescription>
      </FactBoxContent>
      <FactBoxAction>Short Fact</FactBoxAction>
    </FactBox>
  ),
};

export const WithMultipleParagraphs: Story = {
  render: () => (
    <FactBox>
      <FactBoxContent>
        <FactBoxTitle>Multiple Sections</FactBoxTitle>
        <FactBoxDescription>
          <p className="mb-4">First paragraph with important information.</p>
          <p className="mb-4">Second paragraph with additional details.</p>
          <p className="mb-4">Third paragraph with concluding thoughts.</p>
          <p>Final paragraph with a call to action.</p>
        </FactBoxDescription>
      </FactBoxContent>
      <FactBoxAction>Read More</FactBoxAction>
    </FactBox>
  ),
};

export const WithDisabledState: Story = {
  render: () => (
    <FactBox className="opacity-50">
      <FactBoxContent>
        <FactBoxTitle>Disabled Fact Box</FactBoxTitle>
        <FactBoxDescription>
          <p>
            This example shows how the component looks when disabled. The action
            is not clickable in this state.
          </p>
        </FactBoxDescription>
      </FactBoxContent>
      <FactBoxAction className="pointer-events-none">Disabled</FactBoxAction>
    </FactBox>
  ),
};
