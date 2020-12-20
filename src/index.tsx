import * as React from 'react';
import { render } from 'react-dom';

import App from './App';
import { CustomClearIndicator } from './example';
render(<App />, document.getElementById('root'));
render(<CustomClearIndicator />, document.getElementById('rootX'));
