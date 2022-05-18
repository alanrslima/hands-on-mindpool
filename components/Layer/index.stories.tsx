import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Layer from "./index";

export default {
  title: "Components/Layer",
  component: Layer,
} as ComponentMeta<typeof Layer>;

const Template: ComponentStory<typeof Layer> = (args) => <Layer {...args} />;

export const Title = Template.bind({});
Title.args = {
  title: "Hello Storybook",
};

export const Button = Template.bind({});
Button.args = {
  title: "Hello Storybook",
  button: {
    title: "Start",
    onClick: () => {},
  },
};
