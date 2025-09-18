import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import {
  LinkList,
  LinkListItem,
  LinkListTitle,
  LinkListDescription,
} from "kf-component-library";

const linklistItems = [
  {
    id: 1,
    title: "Project Kickoff",
    content: "Initial meeting with the team and stakeholders.",
    url: "https://www.example.com",
  },
  {
    id: 2,
    title: "Design Phase",
    content: "UI/UX design and prototyping.",
    url: "https://www.google.com",
  },
  {
    id: 3,
    title: "Development Start",
    content: "Begin coding the main features.",
    url: "https://www.altavista.com",
  },
  {
    id: 4,
    title: "Testing",
    content: "QA and bug fixing.",
    url: "https://www.reddit.com",
  },
  {
    id: 5,
    title: "Launch",
    content: "Release the product to users.",
    url: "https://www.youtube.com",
  },
];

const meta = {
  title: "components/LinkList",
  component: LinkList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LinkList>
      {linklistItems.map((item) => (
        <LinkListItem key={item.id} href={item.url}>
          <LinkListTitle>{item.title}</LinkListTitle>
          <LinkListDescription>{item.content}</LinkListDescription>
        </LinkListItem>
      ))}
    </LinkList>
  ),
};

export const AsList: Story = {
  render: () => (
    <LinkList variant="list">
      {linklistItems.map((item) => (
        <LinkListItem key={item.id} href={item.url} className="py-4">
          <LinkListTitle>{item.title}</LinkListTitle>
          <LinkListDescription>{item.content}</LinkListDescription>
        </LinkListItem>
      ))}
    </LinkList>
  ),
};

export const WithDisabledState: Story = {
  render: () => (
    <LinkList className="opacity-50">
      {linklistItems.map((item) => (
        <LinkListItem key={item.id} href="#" className="pointer-events-none">
          <LinkListTitle>{item.title}</LinkListTitle>
          <LinkListDescription>{item.content}</LinkListDescription>
        </LinkListItem>
      ))}
    </LinkList>
  ),
};
