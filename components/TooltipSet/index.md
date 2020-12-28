```jsx
import React from 'react';
import { Button } from 'antd';
import TooltipSet from '../TooltipSet';

<div>
  <TooltipSet title="解释说明类tooltip" />
  <TooltipSet title="支持所有tooltip属性" placement="topLeft" color="gold" key="gold">
    自定义DOM
  </TooltipSet>
  <TooltipSet title="自定义DOM">
    <Button type="primary">按钮</Button>
  </TooltipSet>
</div>;
```
