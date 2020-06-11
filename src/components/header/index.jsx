import React, { useState, useEffect } from 'react';
import './style.scss';

export default function Header({ mode, changeMode }) {

  const [appMode, setAppMode] = useState(mode);

  useEffect(() => {
    setAppMode(mode);
  }, [mode]);

  return (
    <header className="site-header">
      <div className="wrapper">
        <h1 className="site-title">Where in the world? </h1>
        <button className="change-mode" onClick={(mode) => changeMode(mode)}>{appMode} Mode</button>
      </div>
    </header>
  );

}