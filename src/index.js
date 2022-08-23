import './index.css';
import ReactDom from 'react-dom/client';
import React from 'react';
import App from './views/App';

const rootEl = document.getElementById('root');

const root = ReactDom.createRoot(rootEl);
root.render(<App/>);
