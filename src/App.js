import React from 'react';
import './App.css';
// 组件的首字母需要大写
import IndexPage from './page/router-page/index.js';
import ContextPage from './page/context/index'

// import hocIndex from './page/hoc/index';
// import Comp from './page/hoc/comp'
// let HocComp = hocIndex(Comp);

import Hooks from './page/hooks/hooks'
function App() {
  return (
    <div>
      {/* 路由组件的使用 */}
      {/* <IndexPage></IndexPage> */}

      {/* context Api的使用 */}
      {/* <ContextPage name={'haha'} age={18}></ContextPage> */}

      {/* hoc的使用 */}
      {/* <HocComp title={'hoc练习'} level={2}></HocComp> */}

      <Hooks></Hooks>
    </div>

  );
}

export default App;
