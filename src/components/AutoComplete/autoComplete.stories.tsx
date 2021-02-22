import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import AutoComplete from "./autoComplete"

export default {
  title: "数据录入/AutoComplete 自动完成",
  component: AutoComplete,
  args: {},
} as Meta

const Template: Story = (args) => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items)
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }))
      })
  }

  return <AutoComplete fetchSuggestions={handleFetch} {...args} />
}

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
