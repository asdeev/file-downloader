import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faDownload } from '@fortawesome/free-solid-svg-icons';

import App from 'pages/App';

import 'styles/main';

library.add(faCircle, faDownload);

ReactDOM.render(<App />, document.getElementById('app'));
