import "../src/index.css";

import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "kf-tailwind",
          ["Introduction", "Colors", "Fonts", "Headings", "Text"],
          "kf-components",
          [
            "Introduction",
            "AccentuatedLink",
            "Banner",
            "Download",
            "FactBox",
            "Feedback",
            "Footer",
            "Header",
            "Infographic",
            "LinkList",
            "Person",
            "Spinner",
            "Timeline",
          ],
          "shadcnui-components",
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      defaultViewport: "largeDesktop",
    },
  },
};

export default preview;
