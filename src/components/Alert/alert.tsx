import React, { useState } from "react"
import classNames from "classnames"
interface BaseAlertProps {
  className?: string
  /**设置 Alert 类型 */
  alertType?: "primary" | "success" | "danger" | "warning"
  children?: React.ReactNode
  /**是否显示关闭按钮 */
  showClose?: boolean
  /**设置 Alert 标题 */
  title?: string
}
/**
 * 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 *
 * ### 引用方法
 *
 * ~~~js
 * import { Alert } from 'explorer'
 * ~~~
 */
const Alert: React.FC<BaseAlertProps> = (props) => {
  const { alertType, children, className, showClose, title } = props
  const [show, setShow] = useState<boolean>(true)
  const classes = classNames("alert", className, {
    [`alert-${alertType}`]: alertType,
  })
  return show ? (
    <div className={classes}>
      {title ? <h6>{title}</h6> : null}
      {children}
      {showClose ? (
        <div
          className="close"
          onClick={() => {
            setShow(false)
          }}
        >
          关闭
        </div>
      ) : null}
    </div>
  ) : null
}
Alert.defaultProps = {
  alertType: "primary",
}
export default Alert
