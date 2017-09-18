import React, { PureComponent } from 'react';
import TabBar from '../components/TabBar/TabBar' 
import Lists from '../components/lists/lists' 



export default class Page2 extends PureComponent {
  render() {
    return (
      <div>
        <Lists />
        <TabBar />
      </div>
    );
  }
}