import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import Menu from "./index"

export default {
  title: "导航/Menu 导航菜单",
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
  <Menu defaultOpenSubMenus={["2"]} onSelect={() => {}} mode="horizontal">
    <Menu.Item>选项一</Menu.Item>
    <Menu.Item disabled>选项二</Menu.Item>
    <Menu.SubMenu title="下拉选项">
      <Menu.Item>下拉选项一</Menu.Item>
      <Menu.Item>下拉选项二</Menu.Item>
    </Menu.SubMenu>
  </Menu>
)

export const Primary = Template.bind({})
