import React from 'react';
import ReactDOM from 'react-dom/client';
import { PhonebookApp } from 'components/PhonebookApp/PhonebookApp';
import { Provider } from 'react-redux/es/exports';
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PhonebookApp />
    </Provider>
  </React.StrictMode>
);
