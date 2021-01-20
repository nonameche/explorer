import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Alert, { BaseAlertProps } from "./alert"

const testProps: BaseAlertProps = {
  className: "test",
  alertType: "danger",
  title: "测试",
}

const closedProps: BaseAlertProps = {
  showClose: true,
}

describe("test Alert component", () => {
  it("should render the correct default alert", () => {
    const wrapper = render(<Alert>测试一下</Alert>)
    const element = wrapper.getByText("测试一下")
    expect(element).toBeInTheDocument()
    expect(element.firstChild).toMatchInlineSnapshot(`测试一下`)
    expect(element).toHaveClass("alert alert-primary")
  })
  it("should render the correct component based on different props", () => {
    const wrapper = render(<Alert {...testProps}>测试一下</Alert>)
    const element = wrapper.getByText("测试一下")
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass("alert alert-danger test")
    expect(element.firstChild).toHaveTextContent("测试")
    expect(element.lastChild).toMatchInlineSnapshot(`测试一下`)
  })
  it("should render the correct component that can be closed", () => {
    const wrapper = render(<Alert {...closedProps}>测试一下</Alert>)
    const element = wrapper.getByText("测试一下")
    const close = wrapper.getByText("关闭")
    expect(element).toBeInTheDocument()
    expect(element.lastChild).toHaveTextContent("关闭")
    fireEvent.click(close)
    expect(element).not.toBeInTheDocument()
  })
})
