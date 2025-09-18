import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import colors from "kf-tailwind/json/basic-colors.json";
import extendedColors from "kf-tailwind/json/extended-colors.json";
import vippsColors from "kf-tailwind/json/vipps-colors.json";
import pinkRibbonColors from "kf-tailwind/json/pink-ribbon-colors.json";

const meta = {
  title: "base/Colors",
  args: { onClick: fn() },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicColors: Story = {
  render: () => {
    type BasicColor = {
      name: string;
      values: { hex: string; oklch?: string; rgba?: string };
    };

    const normalize = (input: unknown): BasicColor[] => {
      if (Array.isArray(input)) return input as BasicColor[];
      if (input && typeof input === "object") {
        return Object.entries(input as Record<string, string>).map(
          ([key, hex]) => ({
            name: `--kf-hex-color-${key}`,
            values: { hex },
          })
        );
      }
      return [];
    };

    const colorArray = normalize(colors as unknown);

    return (
      <>
        <h2>Basic Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {colorArray.map((color) => (
            <div key={color.name} className="flex flex-col items-center">
              <div
                className="min-w-[50px] min-h-[50px] rounded shadow border"
                style={{
                  background: `var(${color.name}, ${color.values.hex})`,
                }}
              />
              <div className="mt-2 text-center font-mono">
                <div className="text-xs">{color.name}</div>
                <div className="text-xs">{color.values.hex}</div>
                {color.values.oklch ? (
                  <div className="mt-1 text-[10px] text-gray-500">
                    {color.values.oklch}
                  </div>
                ) : null}
                {color.values.rgba ? (
                  <div className="text-[10px] text-gray-500">
                    {color.values.rgba}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  },
};

export const ExtendedColors: Story = {
  render: () => {
    type ScaleValue = { oklch: string; hex: string; rgba: string };
    type ColorScale = {
      name: string;
      variable: string;
      values: Record<string, ScaleValue>;
    };

    const data = extendedColors as unknown as ColorScale[];

    return (
      <>
        <h2>Extended Colors</h2>
        <div className="flex flex-col gap-6">
          {data.map((color) => (
            <div key={color.name} className="flex flex-col">
              <h3>{color.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Object.entries(color.values).map(([shade, v]) => (
                  <div key={shade} className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded shadow border"
                      style={{ background: v.oklch }}
                      title={`${color.variable}-${shade}`}
                    />
                    <div className="mt-1 text-[10px] font-mono text-center">
                      {`${color.variable}-${shade}`}
                    </div>
                    <div className="text-[10px] font-mono text-center">
                      {v.oklch}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.hex}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.rgba}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  },
};

export const PinkRibbonColors: Story = {
  render: () => {
    type ScaleValue = { oklch: string; hex: string; rgba: string };
    type ColorScale = {
      name: string;
      variable: string;
      values: Record<string, ScaleValue>;
    };

    const data = pinkRibbonColors as unknown as ColorScale[];

    return (
      <>
        <h2>Pink Ribbon Colors</h2>
        <div className="flex flex-col gap-6">
          {data.map((color) => (
            <div key={color.name} className="flex flex-col">
              <h3>{color.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Object.entries(color.values).map(([shade, v]) => (
                  <div key={shade} className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded shadow border"
                      style={{ background: v.oklch }}
                      title={`${color.variable}-${shade}`}
                    />
                    <div className="mt-1 text-[10px] font-mono text-center">
                      {`${color.variable}-${shade}`}
                    </div>
                    <div className="text-[10px] font-mono text-center">
                      {v.oklch}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.hex}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.rgba}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  },
};

export const VippsColors: Story = {
  render: () => {
    type ScaleValue = { oklch: string; hex: string; rgba: string };
    type ColorScale = {
      name: string;
      variable: string;
      values: Record<string, ScaleValue>;
    };

    const data = vippsColors as unknown as ColorScale[];

    return (
      <>
        <h2>Vipps Colors</h2>
        <div className="flex flex-col gap-6">
          {data.map((color) => (
            <div key={color.name} className="flex flex-col">
              <h3>{color.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Object.entries(color.values).map(([shade, v]) => (
                  <div key={shade} className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded shadow border"
                      style={{ background: v.oklch }}
                      title={`${color.variable}-${shade}`}
                    />
                    <div className="mt-1 text-[10px] font-mono text-center">
                      {`${color.variable}-${shade}`}
                    </div>
                    <div className="text-[10px] font-mono text-center">
                      {v.oklch}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.hex}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.rgba}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  },
};
