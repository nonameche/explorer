import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import Alert from "./alert"

export default {
  title: "反馈/Alert 警告提示",
  component: Alert,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  args: {
    children: "提示",
    alertType: "primary",
    title: "标题",
    showClose: true,
  },
} as Meta

const Template: Story = (args) => <Alert {...args} />

export const Primary = Template.bind({})

// Primary.args = {
//   alertType: "primary",
// }

// export const Success = Template.bind({})
// Success.args = {
//   alertType: "success",
// }

// export const Danger = Template.bind({})
// Danger.args = {
//   alertType: "danger",
// }

// export const Warning = Template.bind({})
// Warning.args = {
//   alertType: "warning",
// }
