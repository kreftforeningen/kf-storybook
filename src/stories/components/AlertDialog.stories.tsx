import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "kf-component-library";

AlertDialog.displayName = "AlertDialog";
AlertDialogAction.displayName = "AlertDialogAction";
AlertDialogCancel.displayName = "AlertDialogCancel";
AlertDialogContent.displayName = "AlertDialogContent";
AlertDialogDescription.displayName = "AlertDialogDescription";
AlertDialogFooter.displayName = "AlertDialogFooter";
AlertDialogHeader.displayName = "AlertDialogHeader";
AlertDialogTitle.displayName = "AlertDialogTitle";
AlertDialogTrigger.displayName = "AlertDialogTrigger";

type AlertDialogProps = React.ComponentProps<typeof AlertDialog>;

const meta = {
  title: "components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: AlertDialogProps) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button>Open Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
