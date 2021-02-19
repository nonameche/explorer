import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import Icon from "./icon"

export default {
  title: "通用/Icon 图标",
  component: Icon,
  args: {
    icon: "check",
    theme: "primary",
  },
} as Meta

const Template: Story = (args) => <Icon icon="check" {...args} />

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
