import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//code splitting
import DynamicLoad from '../components/dynamicLoad/dynamicLoad';

// page

let Home = DynamicLoad(import('../containers/home'));
let Page2 = DynamicLoad(import('../containers/page2'));
let Page3 = DynamicLoad(import('../containers/page3'));




const routes = [
  {
    path: '/',
    isExact: true,
    main: Home
  },
  {
    path: '/lists',
    isExact: false,
    main: Page2
  },
  {
    path: '/article',
    isExact: false,
    main: Page3
  }
];
// 路由映射到组件
const routers = () => (
  <BrowserRouter>
    <div>
      <Switch>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={route.main}
              exact={route.isExact} />
          ))
        }
      </Switch>

    </div>
  </BrowserRouter>
)

export default routers;