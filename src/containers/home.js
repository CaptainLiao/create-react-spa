import React, { PureComponent } from 'react';
import TabBar from '../components/TabBar/TabBar'
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';
import style from './home.scss'

const Step = Steps.Step;

class ProgressStep extends PureComponent {

  render() {
    return (
      <WingBlank size="lg">
        <div className={style['sub-title']}>Small size</div>
        <WhiteSpace />
        <Steps size="small" current={0}>
          <Step title="选择驾考等级" description="This is description" />
          <Step title="选择科目" description="This is description" />
          <Step title="完成" description="This is description" />
        </Steps>

      </WingBlank>
    );
  }
}



export default class App extends PureComponent {
  render() {
    return (
      <div>
        <ProgressStep />
        <TabBar />
      </div>
    );
  }
}