import React from 'react';
import {Link } from 'react-router-dom';
import { TabBar, Icon } from 'antd-mobile';
import './TabBar.scss'
const PropTypes = require('prop-types');

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
    };
  }

  componentWillMount() {
    let pathname = window.location.pathname;
    let selectedTab = '';
    switch (pathname) {
      case '/lists':
        selectedTab = 'greenTab';
        break;
      case '/article':
        selectedTab = 'yellowTab';
        break;  
      default:
        selectedTab = 'blueTab';
        break; 
    }

    this.setState({
      selectedTab
    })
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >

        <TabBar.Item
          title="生活"
          key="生活"
          icon={<div style={{
            width: '0.88rem',
            height: '0.88rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.84rem 0.84rem no-repeat'
          }}
          />
          }
          selectedIcon={<div style={{
            width: '0.88rem',
            height: '0.88rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.84rem 0.84rem no-repeat'
          }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          badge={1}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
            this.context.router.history.push('/')
          }}
          data-seed="logId"
        />


        <TabBar.Item
          icon={
            <div style={{
              width: '0.88rem',
              height: '0.88rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.84rem 0.84rem no-repeat'
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.88rem',
              height: '0.88rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.84rem 0.84rem no-repeat'
            }}
            />
          }
          title="朋友"
          key="朋友"
          dot
          selected={this.state.selectedTab === 'greenTab'}
          badge={5}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
            this.context.router.history.push('./lists')
          }}
        >

        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
            this.context.router.history.push('./article')
          }}
        >

        </TabBar.Item>
      </TabBar>
    );
  }
}

TabBarExample.contextTypes = {
  router: PropTypes.object
}

export default TabBarExample

