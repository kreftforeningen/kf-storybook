import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Infographic,
  InfographicItem,
  InfographicItemIcon,
  InfographicItemTitle,
  InfographicItemTitleNumber,
  InfographicItemTitleText,
  InfographicItemDescription,
} from "kf-shadcnui";
import { HiOutlineCheckCircle } from "react-icons/hi";

const infographicItems = [
  {
    id: 1,
    titleNumber: "3 %",
    titleText: "Project Kickoff",
    description: "Initial meeting with the team and stakeholders.",
    url: "https://www.example.com",
  },
  {
    id: 2,
    titleNumber: "2",
    titleText: "Design Phase",
    description: "UI/UX design and prototyping.",
    url: "https://www.google.com",
  },
  {
    id: 3,
    titleNumber: "1000",
    titleText: "Development Start",
    description: "Begin coding the main features.",
    url: "https://www.altavista.com",
  },
  {
    id: 4,
    titleNumber: "4",
    titleText: "Testing",
    description: "QA and bug fixing.",
    url: "https://www.reddit.com",
  },
  {
    id: 5,
    titleNumber: "50 000",
    titleText: "Launch",
    description: "Release the product to users.",
    url: "https://www.youtube.com",
  },
];

const meta = {
  title: "kf-components/Infographic",
  component: Infographic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Infographic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Infographic>
      {infographicItems.map((item) => (
        <InfographicItem key={item.id} color="blue">
          <InfographicItemIcon>
            <HiOutlineCheckCircle className="w-20 h-20" />
          </InfographicItemIcon>
          <InfographicItemTitle>
            <InfographicItemTitleNumber>
              {item.titleNumber}
            </InfographicItemTitleNumber>
            <InfographicItemTitleText>
              {item.titleText}
            </InfographicItemTitleText>
          </InfographicItemTitle>
          <InfographicItemDescription>
            {item.description}
          </InfographicItemDescription>
        </InfographicItem>
      ))}
    </Infographic>
  ),
};

export const WithDifferentColors: Story = {
  render: () => (
    <Infographic>
      {infographicItems.map((item, index) => (
        <InfographicItem
          key={item.id}
          color={["blue", "green", "red", "yellow", "purple"][index]}
        >
          <InfographicItemIcon>
            <HiOutlineCheckCircle className="w-20 h-20" />
          </InfographicItemIcon>
          <InfographicItemTitle>
            <InfographicItemTitleNumber>
              {item.titleNumber}
            </InfographicItemTitleNumber>
            <InfographicItemTitleText>
              {item.titleText}
            </InfographicItemTitleText>
          </InfographicItemTitle>
          <InfographicItemDescription>
            {item.description}
          </InfographicItemDescription>
        </InfographicItem>
      ))}
    </Infographic>
  ),
};

export const WithSmallerIcons: Story = {
  render: () => (
    <Infographic>
      {infographicItems.map((item) => (
        <InfographicItem key={item.id} color="blue">
          <InfographicItemIcon>
            <HiOutlineCheckCircle className="w-12 h-12" />
          </InfographicItemIcon>
          <InfographicItemTitle>
            <InfographicItemTitleNumber>
              {item.titleNumber}
            </InfographicItemTitleNumber>
            <InfographicItemTitleText>
              {item.titleText}
            </InfographicItemTitleText>
          </InfographicItemTitle>
          <InfographicItemDescription>
            {item.description}
          </InfographicItemDescription>
        </InfographicItem>
      ))}
    </Infographic>
  ),
};

export const WithDisabledState: Story = {
  render: () => (
    <Infographic className="opacity-50">
      {infographicItems.map((item) => (
        <InfographicItem
          key={item.id}
          color="blue"
          className="pointer-events-none"
        >
          <InfographicItemIcon>
            <HiOutlineCheckCircle className="w-20 h-20" />
          </InfographicItemIcon>
          <InfographicItemTitle>
            <InfographicItemTitleNumber>
              {item.titleNumber}
            </InfographicItemTitleNumber>
            <InfographicItemTitleText>
              {item.titleText}
            </InfographicItemTitleText>
          </InfographicItemTitle>
          <InfographicItemDescription>
            {item.description}
          </InfographicItemDescription>
        </InfographicItem>
      ))}
    </Infographic>
  ),
};
