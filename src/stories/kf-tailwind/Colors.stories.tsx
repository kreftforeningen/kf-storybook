import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import colors from "kf-tailwind/json/basic-colors.json";
import extendedColors from "kf-tailwind/json/extended-colors.json";

const meta = {
  title: "kf-tailwind/Colors",
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicColors: Story = {
  render: () => {
    // Convert the object to an array with the correct variable name
    const colorArray = Object.entries(colors).map(([name, hex]) => ({
      name: `--kf-hex-color-${name}`,
      hex,
    }));

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {colorArray.map((color) => (
          <div key={color.name} className="flex flex-col items-center">
            <div
              className="min-w-[50px] min-h-[50px] rounded shadow border"
              style={{ background: `var(${color.name}, ${color.hex})` }}
            />
            <div className="mt-2 text-xs text-center font-mono">
              <div>{color.name}</div>
              <div>{color.hex}</div>
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const ExtendedColors: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {extendedColors.map((color) => (
        <div key={color.name} className="flex flex-col">
          <h3>{color.name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {Object.entries(color.values).map(([shade, value]) => (
              <div key={shade} className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded shadow border"
                  style={{ background: value }}
                  title={`${color.name}-${shade}`}
                />
                <div className="mt-1 text-[10px] font-mono text-center">
                  {shade}
                </div>
                <div className="text-[10px] font-mono text-center">{value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
