import React from "react"
import classNames from "classnames"
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark"

export interface IconProps extends FontAwesomeIconProps {
  /**设置 Icon 主题 */
  theme?: ThemeProps
}
/**
 * 语义化的矢量图形
 *
 * ### 引用方法
 *
 * ~~~js
 * import { Icon } from 'explorer'
 * ~~~
 */
export const Icon: React.FC<IconProps> = (props) => {
  // icon-primary
  const { className, theme, ...restProps } = props
  const classes = classNames("viking-icon", className, {
    [`icon-${theme}`]: theme,
  })
  return <FontAwesomeIcon className={classes} {...restProps} />
}

export default Icon
