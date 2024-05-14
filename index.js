import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import HomeScreen from './HomeScreen';
import { store, persistor } from './store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HomeScreen />
    </PersistGate>
  </Provider>,
);