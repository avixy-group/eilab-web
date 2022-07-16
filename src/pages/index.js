import { useState } from 'react';
import { Progress, Rate, Radio, Slider, Input, Typography, Button, Breadcrumb, notification } from 'antd'

const { Title } = Typography;

export default function Home() {

  const [value, setValue] = useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <div className='m-20'>
      <Title>Next.js + Ant Design + Less + Tailwind CSS</Title>
      <div className='my-5'>
        <Button type="primary" onClick={openNotification}>Primary Button</Button>
        <Button onClick={openNotification}>Default Button</Button>
        <Button type="dashed" onClick={openNotification}>Dashed Button</Button>
        <Button type="text" onClick={openNotification}>Text Button</Button>
        <Button type="link">Link Button</Button>
      </div>
      <div className='my-3'>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </div>
      <div className='my-3'>
        <Rate allowHalf defaultValue={2.5} />
      </div>
      <div>
        <Input placeholder="Basic usage" />
        <Slider defaultValue={30} />
      </div>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='my-4'>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </div>
    </div>
  )
}
