import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Banner,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerButtons,
  Button,
} from "kf-component-library";

const meta = {
  title: "kf-components/Banner",
  component: Banner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "right",
    color: "red",
    children: (
      <>
        <BannerImage src="https://picsum.photos/800/800" alt="Banner" />
        <BannerContent>
          <BannerTitle>Banner</BannerTitle>
          <BannerDescription>
            <p className="mb-4">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text.
            </p>
            <p className="mb-4">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text.
            </p>
          </BannerDescription>
          <BannerButtons>
            <Button className="bg-red-800">Button</Button>
            <Button
              className="border-red-800 bg-transparent text-red-800"
              variant="outline"
            >
              Button
            </Button>
          </BannerButtons>
        </BannerContent>
      </>
    ),
  },
};

export const LeftVariant: Story = {
  args: {
    variant: "left",
    color: "blue",
    children: (
      <>
        <BannerImage src="https://picsum.photos/800/800" alt="Banner" />
        <BannerContent>
          <BannerTitle>Banner</BannerTitle>
          <BannerDescription>
            <p className="mb-4">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text.
            </p>
            <p className="mb-4">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text.
            </p>
          </BannerDescription>
          <BannerButtons>
            <Button className="bg-blue-800">Button</Button>
            <Button
              className="border-blue-800 bg-transparent text-blue-800"
              variant="outline"
            >
              Button
            </Button>
          </BannerButtons>
        </BannerContent>
      </>
    ),
  },
};

export const RightVariant: Story = {
  args: {
    variant: "right",
    color: "green",
    children: (
      <>
        <BannerImage src="https://picsum.photos/800/800" alt="Banner" />
        <BannerContent>
          <BannerTitle>Banner</BannerTitle>
          <BannerDescription>
            <p className="mb-4">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text.
            </p>
            <p className="mb-4">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text.
            </p>
          </BannerDescription>
          <BannerButtons>
            <Button className="bg-green-800">Button</Button>
            <Button
              className="border-green-800 bg-transparent text-green-800"
              variant="outline"
            >
              Button
            </Button>
          </BannerButtons>
        </BannerContent>
      </>
    ),
  },
};

export const WithoutImage: Story = {
  args: {
    variant: "right",
    color: "red",
    className: "h-32",
    children: (
      <BannerContent>
        <BannerTitle>Banner</BannerTitle>
        <BannerDescription>
          <p className="mb-4">
            Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
            Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
            Text. Text.
          </p>
        </BannerDescription>
        <BannerButtons>
          <Button className="bg-red-800">Button</Button>
          <Button
            className="border-red-800 bg-transparent text-red-800"
            variant="outline"
          >
            Button
          </Button>
        </BannerButtons>
      </BannerContent>
    ),
  },
};
