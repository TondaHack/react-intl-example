import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import cs from 'react-intl/locale-data/cs';
import './index.css';
import App from './App';
import messages from './i18n'

const locale = window.location.search.substring(1)|| 'cs';

addLocaleData([...en, ...cs]);

ReactDOM.render(
    <IntlProvider
        locale={window.location.search.substring(1) || locale}
        messages={messages[locale]}
    >
      <App />
    </IntlProvider>,
    document.getElementById('root'));

