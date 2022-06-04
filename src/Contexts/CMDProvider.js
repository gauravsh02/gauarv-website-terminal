import React , { createContext, useContext, useEffect, useState } from 'react';
import * as AvaliableCMDs from '../utils/ExecCMD/index';
import { useStateContext } from '../Contexts/ContextProvider';

const CMDContext = createContext();

export const CMDProvider = ({ children }) => {
  const [history, _setHistory] = useState([]);
  const [command, _setCommand] = useState([]);
  const [commandIndex, _setCommandIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const { setTheme } = useStateContext();

  useEffect(() => {
    (async () => {
      const output = await executeCommand('banner', []);
      _setHistory([...history, {'cmd': 'banner', 'output': output }]);
    })();
  },[]);

  const keyDownAction = async (event) => {
    const [cmd, ...args] = inputValue.split(' ');
    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault();
      if(cmd === '') {
        setHistory('');
        setInputValue('');
      } else {
        const output = await executeCommand(cmd, args);
        setHistory(output);
        setInputValue('');
        if(cmd === 'clear') {
          _setHistory([]);
        }
        if(cmd === 'theme') {
          const output = setTheme(args.join(' '));
          setHistory(output);
          setInputValue('');
        }
      }
      _setCommandIndex(history.length);
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      const command = Object.keys(AvaliableCMDs).filter(cmd => cmd.startsWith(inputValue) );
      if(command.length === 1){
        setInputValue(command[0]);
      }
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const currIndex = commandIndex;
      if( currIndex < command.length ) {
        setInputValue(command[currIndex]);
        _setCommandIndex(currIndex + 1);
      }
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const currIndex = commandIndex - 1;
      if( currIndex >= 0 ) {
        setInputValue(command[currIndex]);
        _setCommandIndex(currIndex);
      }
    }

  }

  const executeCommand = async (cmd, args) => {
    if( Object.keys(AvaliableCMDs).indexOf(cmd) === -1 ){
      return `Coammand ${cmd} not found. Try 'help' to see list of avaliable command.`;
    } else {
      const result = await AvaliableCMDs[cmd](args);
      return result;
    }
  }

  const setHistory = ( output ) => {
    _setHistory([...history, {'cmd': inputValue, 'output': output}]);
    setCMD();
  }

  const setCMD = () => {
    _setCommand([...command, inputValue]);
  }

  const checkCMD = (cmd) => {
    return Object.keys(AvaliableCMDs).indexOf(cmd.split(' ')[0]) !== -1
  }

  return (
    <CMDContext.Provider value={{ history, command, executeCommand, setHistory, checkCMD, keyDownAction, inputValue, setInputValue }} >
      { children }
    </CMDContext.Provider>
  );
}

export const useCMDContext = () => useContext(CMDContext);