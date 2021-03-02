import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import Input from "./input"

export default {
  title: "数据录入/Input 输入框",
  component: Input,
  args: {
    size: "lg",
    prepend: "邮箱",
    append: ".com",
    style: {
      padding: "20px 40px",
      width: "500px",
    },
  },
} as Meta

const Template: Story = (args) => <Input {...args} />

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
