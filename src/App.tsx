import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='board'>
        <div className="background">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
          <div className="line line4"></div>
        </div>
        <div className='board-square'>
          <div className="piece cross">
            <div className="x1">
              <div className="sub neon"></div>
              <div className="sub neon"></div>
            </div>
            <div className="x2 neon"></div>
          </div>

        </div>
        <div className='board-square'>
          <div className="piece round"> </div>
        </div>
        <div className='board-square'>
          <div className="piece round"> </div>
        </div>
        <div className='board-square'>
          <div className="piece round"> </div>
        </div>
        <div className='board-square'>
          <div className="piece round"> </div>
        </div>
        <div className='board-square'>
          <div className="piece round"> </div>
        </div>
        <div className='board-square'>
          <div className="piece round"> </div>
        </div>
        <div className='board-square'>
          <div className="piece round"> </div>
        </div>
        <div className='board-square'>
          <div className="piece round"> </div>
        </div>

      </div>

    </div>
  );
}

export default App;
