import * as React from 'react';
import { render } from 'react-dom';

import App from './App';
import { Filter } from './Components/Filter';
// import { CustomClearIndicator } from './example';
// render(<App />, document.getElementById('root'));

import data from './Models/data.json';
render(
	<Filter count={data.products.length} />,
	document.getElementById('root')
);
