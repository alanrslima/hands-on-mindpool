import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navigator from "./index";

export default {
  title: "Components/Navigator",
  component: Navigator,
} as ComponentMeta<typeof Navigator>;

export const Template: ComponentStory<typeof Navigator> = (args) => (
  <Navigator {...args} />
);
