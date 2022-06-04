
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
    <div className='min-w-max text-xs md:min-w-full md:text-base'>
      <div className="overflow-y-auto h-full w-full" ref={containerRef} onClick={focusOnInput} style={{backgroundColor: theme.backgroundColor, color: theme.color}}  >
        <CMDInput
          inputRef={inputRef}
          containerRef={containerRef}
        />
      </div>
    </div>
    </>
  );
}
export default App;
