import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
    </Provider>
  </React.StrictMode>
)
