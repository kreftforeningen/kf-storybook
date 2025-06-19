import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  AspectRatio,
} from "kf-shadcnui";

const meta = {
  title: "shadcnui-components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="max-w-xl mx-auto">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://picsum.photos/1600/900"
                alt="Card Image"
                className="object-cover w-full h-full rounded-md"
              />
            </AspectRatio>
          </CarouselItem>
          <CarouselItem>
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://picsum.photos/1600/900"
                alt="Card Image"
                className="object-cover w-full h-full rounded-md"
              />
            </AspectRatio>
          </CarouselItem>
          <CarouselItem>
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://picsum.photos/1600/900"
                alt="Card Image"
                className="object-cover w-full h-full rounded-md"
              />
            </AspectRatio>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};
