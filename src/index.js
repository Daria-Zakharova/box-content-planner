import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { ThemeProvider } from '@mui/material';
import { theme } from 'utils/theme';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading="loading..." persistor={persistor}>
          <App/>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
