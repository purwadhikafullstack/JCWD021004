import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { Fonts } from './assets/fonts/Fonts.jsx';
import { theme } from './assets/theme/Theme.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Fonts />
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
