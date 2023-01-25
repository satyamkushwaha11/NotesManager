import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import NoteState from './context/notes/noteState';




ReactDOM.render(
  <React.StrictMode>
    <NoteState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NoteState>
  </React.StrictMode>,
  document.getElementById('root')
);


