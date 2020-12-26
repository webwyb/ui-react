```jsx
import React from 'react';
import TabState from '../TabState';

const options = [
  { label: '全部', value: '0', count: 0 },
  { label: '待签署合同', value: '1', count: 0 },
  { label: '待收款', value: '2', count: 0 },
];

const [curVal, setCurVal] = React.useState('0');
const onChange = (value) => {
  console.log(value);
  setCurVal(value);
};

<>
  <TabState
    // 数据数组
    options={options}
    // 选中的值
    value={curVal}
    // 状态切换的回调方法
    onChange={onChange}
    labelCol={{ span: 3 }}
    wrapperCol={{ span: 21 }}
  />
</>;
```
