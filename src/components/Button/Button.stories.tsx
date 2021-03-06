import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import { Button, ButtonProps } from "./button"

export default {
  title: "通用/Button 按钮",
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  args: {
    children: "Button",
    size: "lg",
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  btnType: "primary",
}

export const Default = Template.bind({})
Default.args = {
  btnType: "default",
}

export const Danger = Template.bind({})
Danger.args = {
  btnType: "danger",
}

export const Link = Template.bind({})
Link.args = {
  btnType: "link",
}
