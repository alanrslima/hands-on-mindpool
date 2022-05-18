import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Rating from "./index";

export default {
  title: "Components/Rating",
  component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const DefaultScore = Template.bind({});
DefaultScore.args = {
  defaultScore: 0,
};
