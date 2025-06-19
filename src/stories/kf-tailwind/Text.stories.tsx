import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const meta = {
  title: "kf-tailwind/Text",
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h2>Paragraph</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>

      <h2>Blockquote</h2>

      <blockquote>
        <p>Blockquote</p>
        <cite>Name of the author</cite>
      </blockquote>

      <h2>List</h2>
      <ul className="list-disc list-inside">
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </ul>

      <ol className="list-decimal list-inside">
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </ol>
    </div>
  ),
};
