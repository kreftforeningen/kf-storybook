import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "kf-shadcnui";

const meta = {
  title: "shadcnui-components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Library</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Data</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList className="text-lg text-blue-700">
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="hover:underline">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="mx-2 text-blue-400">
          /
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="hover:underline">
            Library
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="mx-2 text-blue-400">
          /
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-bold">Data</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};
