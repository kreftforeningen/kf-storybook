import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Feedback,
  FeedbackContent,
  FeedbackTitle,
  FeedbackDescription,
  FeedbackSubmit,
  FeedbackComment,
  FeedbackCommentInput,
  FeedbackButtons,
  FeedbackButtonNegative,
  FeedbackButtonPositive,
  FeedbackHeader,
} from "kf-component-library";

const meta = {
  title: "kf-components/Feedback",
  component: Feedback,
  parameters: {
    layout: "padded",
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Feedback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <h2>Default</h2>
      <Feedback>
        <FeedbackHeader>
          <FeedbackTitle>We value your feedback</FeedbackTitle>
          <FeedbackDescription>
            Please let us know if our service met your expectations.
          </FeedbackDescription>
        </FeedbackHeader>
        <FeedbackContent>
          <FeedbackButtons>
            <FeedbackButtonPositive />
            <FeedbackButtonNegative />
          </FeedbackButtons>
          <FeedbackComment>
            <FeedbackCommentInput>Feedback</FeedbackCommentInput>
            <FeedbackSubmit>Submit Feedback</FeedbackSubmit>
          </FeedbackComment>
        </FeedbackContent>
      </Feedback>
    </>
  ),
};

export const Custom: Story = {
  render: () => (
    <>
      <h2>Custom</h2>
      <Feedback>
        <FeedbackHeader>
          <FeedbackTitle>Tell us what you think</FeedbackTitle>
          <FeedbackDescription>
            We would love to hear your thoughts.
          </FeedbackDescription>
        </FeedbackHeader>
        <FeedbackContent>
          <FeedbackButtons>
            <FeedbackButtonPositive>Very good</FeedbackButtonPositive>
            <FeedbackButtonNegative>Very bad</FeedbackButtonNegative>
          </FeedbackButtons>
          <FeedbackComment>
            <FeedbackCommentInput
              label="Your comment"
              placeholder="Tell us what you think"
            />
            <FeedbackSubmit>Hit it</FeedbackSubmit>
          </FeedbackComment>
        </FeedbackContent>
      </Feedback>
    </>
  ),
};
