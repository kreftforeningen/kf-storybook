import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import {
  Person,
  PersonItem,
  PersonItemImage,
  PersonItemContent,
  PersonItemName,
  PersonItemTitle,
  PersonItemEmail,
  PersonItemPhone,
  PersonItemDescription,
} from "kf-component-library";

const personItems = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.long.name.johnson.doe@example.com",
    phone: "+47 98765432",
    title: "Software Engineer",
    image: "https://picsum.photos/300/300",
    description:
      "John Doe is a software engineer with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    email: "j.doe@example.com",
    phone: "+47 98765432",
    title: "Marketing Manager",
    description:
      "Jane Doe is a marketing manager with a passion for building scalable and efficient systems. She is a quick learner and always looking for new challenges.",
  },
  {
    id: 3,
    firstName: "Alfred",
    lastName: "Hitchcock",
    email: "a.hitchcock@example.com",
    phone: "+47 98765432",
    title: "Product Manager",
    image: "https://picsum.photos/300/300",
    description:
      "Alfred Hitchcock is a product manager with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
  {
    id: 4,
    firstName: "Jane",
    lastName: "Fonda",
    email: "j.fonda@example.com",
    phone: "+47 98765432",
    title: "Sales Manager",
    image: "https://picsum.photos/300/300",
    description:
      "Jane Fonda is a sales manager with a passion for building scalable and efficient systems. She is a quick learner and always looking for new challenges.",
  },
  {
    id: 5,
    firstName: "Lars Ola",
    lastName: "Wayne",
    email: "lwayne@example.com",
    phone: "+47 98765432",
    title: "CEO",
    description:
      "Lars Wayne is a CEO with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
];

const meta = {
  title: "kf-components/Person",
  component: Person,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Person>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Person>
      {personItems.map((item) => (
        <PersonItem key={item.id}>
          <PersonItemImage
            src={item.image}
            alt={`${item.firstName} ${item.lastName}`}
            fallback={`${item.firstName.charAt(0)}${item.lastName.charAt(0)}`}
          />
          <PersonItemContent>
            <PersonItemName>
              {item.firstName} {item.lastName}
            </PersonItemName>
            <PersonItemTitle>{item.title}</PersonItemTitle>
            <PersonItemEmail href={`mailto:${item.email}`}>
              {item.email}
            </PersonItemEmail>
            <PersonItemPhone href={`tel:${item.phone}`}>
              {item.phone}
            </PersonItemPhone>
            <PersonItemDescription>{item.description}</PersonItemDescription>
          </PersonItemContent>
        </PersonItem>
      ))}
    </Person>
  ),
};

export const WithDisabledState: Story = {
  render: () => (
    <Person className="opacity-50">
      {personItems.map((item) => (
        <PersonItem key={item.id} className="pointer-events-none">
          <PersonItemImage
            src={item.image}
            alt={`${item.firstName} ${item.lastName}`}
            fallback={`${item.firstName.charAt(0)}${item.lastName.charAt(0)}`}
          />
          <PersonItemContent>
            <PersonItemName>
              {item.firstName} {item.lastName}
            </PersonItemName>
            <PersonItemTitle>{item.title}</PersonItemTitle>
            <PersonItemEmail href="#">{item.email}</PersonItemEmail>
            <PersonItemPhone href="#">{item.phone}</PersonItemPhone>
            <PersonItemDescription>{item.description}</PersonItemDescription>
          </PersonItemContent>
        </PersonItem>
      ))}
    </Person>
  ),
};
