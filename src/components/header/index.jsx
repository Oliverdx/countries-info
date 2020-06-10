import React, { useState, useEffect } from 'react';
import './style.scss';

export default function Header({ mode, changeMode }) {

  const [appMode, setAppMode] = useState(mode);
  useEffect(() => {
    setAppMode(mode);
  }, [mode]);

  return (
    <header>
      <h1>Where in the world? </h1>
      <button onClick={(mode) => changeMode(mode)}>{appMode} Mode</button>
    </header>
  );

}