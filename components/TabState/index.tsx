/**
 * tab搜索条件
 * zcy 2020/3/17
 */
import React, { Component } from 'react';
import { Radio, Form } from 'antd';

type Iprops = {
  // label文字
  label?: any;
  // 数据对象
  options: any;
  // 选中的值，不传默认第一项
  value?: any;
  // setValue?:(v:any) => void;
  onChange: (v: any) => void;
  labelCol?: any;
  wrapperCol?: any;
  className?: string;
  // 其他任意透传字段
  [key: string]: any;
};
type IState = {};

class TabState extends Component<Iprops, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: props.value ? props.value : props.options.length > 0 ? props.options[0].value : 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  /**
   * tab切换事件，回调外部函数
   * @param e
   */
  onChange(e: any) {
    const value = e.target.value;
    // this.setState({ value });
    const { onChange } = this.props;
    onChange && onChange(value);
  }

  /**
   * 重置后需要调用此方法，设置重置的值。
   * @param v
   */
  // setValue(v: any) {
  //   this.setState({ value: v });
  // }

  render() {
    const { label, options, value, labelCol, wrapperCol, className } = this.props;
    return (
      <Form.Item label={label} labelCol={labelCol} wrapperCol={wrapperCol}>
        <Radio.Group
          defaultValue={value}
          value={value}
          buttonStyle="solid"
          className={'tab'}
          onChange={this.onChange}
        >
          {options.length > 0 &&
            options.map((tab: any) => {
              return (
                <Radio.Button value={tab.value} key={tab.value}>
                  {tab.label}
                  {tab.count !== undefined && `(${tab.count})`}
                </Radio.Button>
              );
            })}
        </Radio.Group>
      </Form.Item>
    );
  }
}

export default TabState;
