import * as React from 'react';
import { render } from 'react-dom';

import { App } from './Components/App';
import data from './Models/data.json';

render(<App {...data} />, document.getElementById('root'));
