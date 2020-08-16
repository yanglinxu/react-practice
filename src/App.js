import React from 'react';
import './App.css';
// 组件的首字母需要大写
import IndexPage from './page/router-page/index.js';
import ContextPage from './page/context/index'
function App() {
  return (
    <div>
      {/* <IndexPage></IndexPage> */}
      <ContextPage></ContextPage>
      <div>ahahahah</div>
    </div>

  );
}

export default App;
