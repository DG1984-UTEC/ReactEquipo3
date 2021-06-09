import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import {ToastProvider} from 'react-toast-notifications';
import React from 'react';
import {BrowserRouter} from "react-router-dom"

export const renderComponent = ({ store, component }) => (
  render(
    <React.StrictMode>
      <ToastProvider>
        <BrowserRouter>
          <Provider store={store}>
              {component}
          </Provider>
        </BrowserRouter>
      </ToastProvider>
    </React.StrictMode>
  )
);