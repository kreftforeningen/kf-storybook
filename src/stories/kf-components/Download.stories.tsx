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
} from "kf-shadcnui";

const meta = {
  title: "kf-components/Download",
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
    <Download>
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
