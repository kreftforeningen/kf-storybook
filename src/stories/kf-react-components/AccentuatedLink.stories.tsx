import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  AccentuatedLink,
  AccentuatedLinkTitle,
  AccentuatedLinkSubtitle,
} from "kf-react-components";

const meta = {
  title: "kf-react-components/AccentuatedLink",
  component: AccentuatedLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof AccentuatedLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AccentuatedLink href="https://www.google.com">
      <AccentuatedLinkSubtitle>Subtitle</AccentuatedLinkSubtitle>
      <AccentuatedLinkTitle>Google</AccentuatedLinkTitle>
    </AccentuatedLink>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <AccentuatedLink href="https://www.example.com">
      <AccentuatedLinkSubtitle>Featured Article</AccentuatedLinkSubtitle>
      <AccentuatedLinkTitle>
        Understanding Modern Web Development Practices
      </AccentuatedLinkTitle>
    </AccentuatedLink>
  ),
};

export const WithMultipleLinks: Story = {
  render: () => (
    <div className="grid gap-4">
      <AccentuatedLink href="https://www.example.com">
        <AccentuatedLinkSubtitle>Getting Started</AccentuatedLinkSubtitle>
        <AccentuatedLinkTitle>Quick Start Guide</AccentuatedLinkTitle>
      </AccentuatedLink>

      <AccentuatedLink href="https://www.example.com/docs">
        <AccentuatedLinkSubtitle>Documentation</AccentuatedLinkSubtitle>
        <AccentuatedLinkTitle>API Reference</AccentuatedLinkTitle>
      </AccentuatedLink>

      <AccentuatedLink href="https://www.example.com/tutorials">
        <AccentuatedLinkSubtitle>Tutorials</AccentuatedLinkSubtitle>
        <AccentuatedLinkTitle>Step-by-Step Guides</AccentuatedLinkTitle>
      </AccentuatedLink>
    </div>
  ),
};

export const WithDisabledState: Story = {
  render: () => (
    <AccentuatedLink
      href="https://www.example.com"
      className="opacity-50 cursor-not-allowed pointer-events-none"
    >
      <AccentuatedLinkSubtitle>Coming Soon</AccentuatedLinkSubtitle>
      <AccentuatedLinkTitle>Feature Not Available</AccentuatedLinkTitle>
    </AccentuatedLink>
  ),
};
