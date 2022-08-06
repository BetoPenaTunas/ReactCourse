import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DynamicTitle } from './DynamicTitle';
import NewCounter from './NewCounter';
import reportWebVitals from './reportWebVitals';
import { Blink } from './Blink';
import { MouseCoordenates } from './MouseCoordenates';
import { IconToogle } from './IconToogle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const newCounter= ReactDOM.createRoot(
  document.getElementById('new-counter') as HTMLElement
);
newCounter.render(

  <React.StrictMode>
    <NewCounter />
  </React.StrictMode>

);

const dynamicTitle= ReactDOM.createRoot(
  document.getElementById('dyna-title') as HTMLElement
);
dynamicTitle.render(

  <React.StrictMode>
    <DynamicTitle/>
  </React.StrictMode>

);

const blink= ReactDOM.createRoot(
  document.getElementById('blink') as HTMLElement
);

blink.render(
  <React.StrictMode>
    <Blink />
  </React.StrictMode>
);

const mouseMvmt= ReactDOM.createRoot(
  document.getElementById('mouse-move') as HTMLElement
);
mouseMvmt.render(
  <React.StrictMode>
    <MouseCoordenates />
  </React.StrictMode>
);

const newHook= ReactDOM.createRoot(
  document.getElementById("new-hook") as HTMLElement
);

newHook.render(
  <React.StrictMode>
    <IconToogle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
