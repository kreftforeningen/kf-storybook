import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  AspectRatio,
  Badge,
} from "kf-shadcnui";
import { LuArrowRight } from "react-icons/lu";

const meta = {
  title: "shadcnui-components/Card",
  component: Card,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent>This is a simple card.</CardContent>
    </Card>
  ),
};

export const WithHeaderFooterAction: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a card description.</CardDescription>
        <CardAction>
          <Badge>Badge</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>Here is some content inside the card.</CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Card className="bg-gradient-to-br from-blue-100 to-blue-300 border-0 shadow-xl max-w-md">
      <CardHeader>
        <CardTitle className="text-blue-900">Custom Card</CardTitle>
        <CardDescription className="text-blue-700">
          With custom background and shadow
        </CardDescription>
        <CardAction>
          <Badge>Badge</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This card uses a gradient background and no border.</p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Secondary Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithImageGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="pt-0">
        <AspectRatio ratio={16 / 9} className="rounded-t-md overflow-hidden">
          <img
            src="https://picsum.photos/1600/900"
            alt="Card Image"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <CardHeader>
          <CardDescription>29.05.2020</CardDescription>
          <CardTitle>– In About Five Minutes I'll Be There</CardTitle>
          <CardAction>
            <Badge>Badge</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>
            During the first few minutes of the conversation, I'll be there. But
            where will you be?
          </p>
        </CardContent>
        <CardFooter>
          <LuArrowRight />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>29.05.2020</CardDescription>
          <CardTitle>– In About Five Minutes I'll Be There</CardTitle>
          <CardAction>
            <Badge>Badge</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>
            During the first few minutes of the conversation, I'll be there. But
            where will you be?
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  ),
};
