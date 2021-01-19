import React, { useState } from "react"
import classNames from "classnames"

export enum AlertType {
  Primary = "primary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
}
interface BaseAlertProps {
  className?: string
  alertType?: string
  children?: React.ReactNode
  showClose?: boolean
  title?: string
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const { alertType, children, showClose, title } = props
  const [show, setShow] = useState<boolean>(true)
  const classes = classNames("alert", {
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
  alertType: AlertType.Primary,
}
export default Alert
