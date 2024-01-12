import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from 'App';
import store from 'store/store';

const root = document.getElementById('root');
const rootDOM = createRoot(root!);

rootDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
);
