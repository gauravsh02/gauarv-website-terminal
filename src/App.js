
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import { useStateContext } from './Contexts/ContextProvider';

import CMDInput from './components/CMDInput';

function App() {
  const { theme } = useStateContext();
  const inputRef = useRef();
  const containerRef = useRef();

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div className="overflow-y-auto h-full" ref={containerRef} onClick={focusOnInput} style={{backgroundColor: theme.backgroundColor, color: theme.color}}  >
        <CMDInput
          inputRef={inputRef}
          containerRef={containerRef}
        />
        {/* <div>
          <span>{theme.name}</span>
          <button onClick={() => { setTheme('light') }}> click here </button>
        </div> */}
      </div>
    </>
  );
}
export default App;
