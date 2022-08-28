import './App.css';
import React from 'react';
import Effect from './UseEffect/Effect';
import Reducer from './UseReducer/Reducer';
import State from './UseState/State';
import Ref from './UseRef/Ref';
import LayoutEffect from './UseLayoutEffect/LayoutEffect';
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle';
import Context from './UseContext/Context';
import Memo from './UseMemo/Memo';
import CallBack from './UseCallBack/CallBack';

function App() {
  return (
    <div className="App">
      <State/>
      <Reducer/>
      <Effect />
      <Ref />
      <LayoutEffect />
      <ImperativeHandle />
      <Context />
      <Memo />
      <CallBack />
    </div>
  );
}

export default App;
