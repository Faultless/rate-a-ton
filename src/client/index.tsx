import { render } from 'react-dom';
import * as React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';
import './index.global.css';

const rootElement = document.getElementById('root');

const wrapApp = AppComponent => (
  <AppContainer>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </AppContainer>
);

render(wrapApp(App), rootElement);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(wrapApp(NextApp), rootElement);
  });
}
