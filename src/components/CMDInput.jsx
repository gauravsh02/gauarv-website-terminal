import React, { useState, useEffect } from 'react';

import { useStateContext } from '../Contexts/ContextProvider';
import { useCMDContext } from '../Contexts/CMDProvider';

const CMDInput = ({ inputRef, containerRef }) => {
  const { theme, setTheme } = useStateContext();
  const [hostname, setHostname] = useState('');
  const { checkCMD, keyDownAction, inputValue, setInputValue, history } = useCMDContext();

  useEffect(() => {
    if (typeof window !== undefined) {
      setHostname(window.location.hostname);
    }
  }, []);

  useEffect(() => {
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
  });

  return (

    <>
      {history.map((rec, index) => (
        <>

          <div key={rec.cmd+'_'+index} className="flex flex-row space-x-2">
            <div className="flex-shrink">
            <label htmlFor="cmd-field">
              <span>[guest</span>
              <span>@</span>
              <span>{hostname}</span>
              <span> ~]$ </span>
            </label>
            </div>
            
            <div className="flex-grow"
              style={{
                backgroundColor: theme.backgroundColor,
                color: checkCMD(rec.cmd) && rec.cmd != '' ? theme.green : theme.red
              }}
            >
              {rec.cmd}
            </div>
          </div>
          <p
            className="whitespace-pre-wrap mb-2"
            style={{ lineHeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: rec.output }}
          />


        </>
      ))}
      <div className="flex flex-row space-x-2">
        <label htmlFor="cmd-field" className="flex-shrink">
          <span>[guest</span>
          <span>@</span>
          <span>{hostname}</span>
          <span> ~]$ </span>
        </label>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(event) => { setInputValue(event.target.value); }}
          onKeyDown={keyDownAction}
          id="cmd-field"
          key="cmd-field"
          type="text"
          className="focus:outline-none flex-grow"
          aria-label="prompt"
          style={{
            backgroundColor: theme.backgroundColor,
            color: checkCMD(inputValue) && inputValue != '' ? theme.green : theme.red
          }}
          autoFocus
          autoComplete="off"
        />
      </div>
    </>


  );
};

export default CMDInput;