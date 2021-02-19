import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import Menu from "./menu"
import MenuItem from "./menuItem"
import SubMenu from "./subMenu"

export default {
  title: "Example/Menu",
  component: Menu,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  args: {
    defaultIndex: "0",
    mode: "horizontal",
    defaultOpenSubMenus: ["2"],
  },
} as Meta

const Template: Story = (args) => (
  <Menu {...args}>
    <MenuItem>选项一</MenuItem>
    <MenuItem disabled>选项二</MenuItem>
    <SubMenu title="下拉选项">
      <MenuItem>下拉选项一</MenuItem>
      <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
  </Menu>
)

export const Primary = Template.bind({})
