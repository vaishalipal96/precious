import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/Redux/config/store';
import Home from './src/Screens/Home';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <Home />
        </PersistGate>
      </Provider>
    );
  }
}
