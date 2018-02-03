import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Application from '@Containers/Application.js';
import store from '@Store/store.js';
import ReduxNavigation from '@Navigation/ReduxNavigation.js'

export default class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <ReduxNavigation />
      </Provider>
    );
  }
}
