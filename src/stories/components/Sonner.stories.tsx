import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button, Toaster, toast } from "kf-component-library";

const meta = {
  title: "components/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Sonner</h2>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Show Toast
      </Button>
      <Toaster position="top-center" richColors closeButton />
    </div>
  ),
};
