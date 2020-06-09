import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(<App data='https://restcountries.eu/rest/v2/all' />, document.getElementById('app'));