import React, { PureComponent } from 'react';
import TabBar from '../components/TabBar/TabBar' 
import Article from '../components/article/article' 



export default class Page3 extends PureComponent {
  render() {
    return (
      <div>
        <Article />
        <TabBar />
      </div>
    );
  }
}