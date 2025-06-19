import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Download,
  DownloadContent,
  DownloadImage,
  DownloadMain,
  DownloadTitle,
  DownloadDescription,
  DownloadFooter,
  DownloadDownloadUrl,
  DownloadOrderUrl,
} from "kf-react-components";

const meta = {
  title: "kf-react-components/Download",
  component: Download,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Download>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Download className="">
      <DownloadContent>
        <DownloadImage src="https://picsum.photos/200/300" />
        <DownloadMain>
          <DownloadTitle>Download</DownloadTitle>
          <DownloadDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </DownloadDescription>
        </DownloadMain>
      </DownloadContent>
      <DownloadFooter>
        <DownloadDownloadUrl href="https://www.google.com">
          Last ned
        </DownloadDownloadUrl>
        <DownloadOrderUrl href="https://www.google.com">
          Bestill
        </DownloadOrderUrl>
      </DownloadFooter>
    </Download>
  ),
};

export const WithCustomImage: Story = {
  render: () => (
    <Download>
      <DownloadContent>
        <DownloadImage
          src="https://picsum.photos/400/300"
          className="object-cover"
        />
        <DownloadMain>
          <DownloadTitle>Custom Image</DownloadTitle>
          <DownloadDescription>
            This example shows how to use a custom image with different
            dimensions and object-fit properties.
          </DownloadDescription>
        </DownloadMain>
      </DownloadContent>
      <DownloadFooter>
        <DownloadDownloadUrl href="https://www.google.com">
          Download
        </DownloadDownloadUrl>
        <DownloadOrderUrl href="https://www.google.com">Order</DownloadOrderUrl>
      </DownloadFooter>
    </Download>
  ),
};

export const WithShortDescription: Story = {
  render: () => (
    <Download>
      <DownloadContent>
        <DownloadImage src="https://picsum.photos/200/300" />
        <DownloadMain>
          <DownloadTitle>Short Description</DownloadTitle>
          <DownloadDescription>
            A brief description that doesn't take up much space.
          </DownloadDescription>
        </DownloadMain>
      </DownloadContent>
      <DownloadFooter>
        <DownloadDownloadUrl href="https://www.google.com">
          Download
        </DownloadDownloadUrl>
        <DownloadOrderUrl href="https://www.google.com">Order</DownloadOrderUrl>
      </DownloadFooter>
    </Download>
  ),
};

export const WithDisabledState: Story = {
  render: () => (
    <Download className="opacity-50">
      <DownloadContent>
        <DownloadImage src="https://picsum.photos/200/300" />
        <DownloadMain>
          <DownloadTitle>Disabled State</DownloadTitle>
          <DownloadDescription>
            This example shows how the component looks when disabled. The links
            are not clickable in this state.
          </DownloadDescription>
        </DownloadMain>
      </DownloadContent>
      <DownloadFooter>
        <DownloadDownloadUrl href="#" className="pointer-events-none">
          Download
        </DownloadDownloadUrl>
        <DownloadOrderUrl href="#" className="pointer-events-none">
          Order
        </DownloadOrderUrl>
      </DownloadFooter>
    </Download>
  ),
};
