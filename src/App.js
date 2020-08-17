import React from 'react';
import './App.css';
// 组件的首字母需要大写
import IndexPage from './page/router-page/index.js';
import ContextPage from './page/context/index'

import hocIndex from './page/hoc/index';
import Comp from './page/hoc/comp'
let HocComp = hocIndex(Comp);
function App() {
  return (
    <div>
      {/* <IndexPage></IndexPage> */}

      {/* <ContextPage name={'haha'} age={18}></ContextPage> */}
      <HocComp title={'hoc练习'} level={2}></HocComp>
    </div>

  );
}

export default App;
