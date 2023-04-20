// eslint-disable-next-line spaced-comment
/// <reference types="react-dom/next" />

import React from 'react';
import App from "./App"
import ReactDOM from "react-dom/client";

const ele = document.getElementById('app');
if (!ele) throw new Error('no app');


const root = ReactDOM.createRoot(
  ele as HTMLElement
);

root.render(<App />)
