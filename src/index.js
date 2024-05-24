import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import config from '../.appConfig.json';
import locales from './locales.json';
import { bootstrap } from '@absis/core';

/* Danger Zone : Do not modify */
bootstrap(config, config.mode, locales)
  .then(() => {
    ReactDOM.render(<Routes />, window.document.getElementById(config.id));
  })
  .catch(e => {
    throw e;
  });
