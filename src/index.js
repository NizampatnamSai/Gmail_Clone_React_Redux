// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from './app/store';
import { Provider } from 'react-redux';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Provider store={store}>

    <App /></Provider>
  </StrictMode>
);