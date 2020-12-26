import React, { ReactNode } from 'react';
import { Tooltip } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1743885_oi02ew8qbyb.js',
});

export interface ITooltip {
  /**
   * 提示文案
   */
  title: ReactNode | (() => ReactNode);
  /**
   * 支持toolTip所有的属性
   */
  [key: string]: any;
  /**
   * tooltip包裹的DOM, 默认是一个问号ICON
   */
  children?: React.ReactNode;
}
/**
 * TooltipSet 组件
 */
function TooltipSet(props: ITooltip) {
  return <Tooltip {...props}>{props.children}</Tooltip>;
}
TooltipSet.defaultProps = {
  title: '说明文案',
  children: <IconFont type="iconhuise" />,
};
export default TooltipSet;
