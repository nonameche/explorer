import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import Upload from "./upload"

export default {
  title: "数据录入/Upload 输入框",
  component: Upload,
  args: {
    beforeUpload: "邮箱",
    onProgress: ".com",
    name: "file",
    data: "",
  },
} as Meta

const Template: Story = (args) => (
  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" {...args} />
)

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
