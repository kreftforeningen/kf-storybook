import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Avatar, AvatarFallback, AvatarImage } from "kf-shadcnui";

type AvatarProps = React.ComponentProps<typeof Avatar>;

const meta = {
  title: "shadcnui-components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Avatar",
  },
  render: (args: AvatarProps) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" />
    </Avatar>
  ),
};

export const WithFallback: Story = {
  args: {
    children: "Avatar",
  },
  render: (args: AvatarProps) => (
    <Avatar {...args}>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Group: Story = {
  args: {
    children: "Avatar",
  },
  render: () => (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
  ),
};
