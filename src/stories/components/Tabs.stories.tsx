import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "kf-component-library";

const meta = {
  title: "components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Tabs</h2>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="delete">Delete</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsContent value="delete">Delete your account here.</TabsContent>
      </Tabs>
    </div>
  ),
};
