/* eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Notifs } from 'redux-notifications';

import configureStore from './store/configureStore';
import initialState from './store/initial.state';
import App from './containers/app';

import 'react-date-picker/index.css';
import 'react-select/dist/react-select.css';
import '../assets/scss/styles.scss';

const store = configureStore(initialState);

render(
    <Provider store={store}>
      <div>
        <Notifs />
        <App />
      </div>
    </Provider>
  , document.getElementById('app'));
