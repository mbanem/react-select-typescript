import React from 'react';
import { SelectOrder } from './SelectOrder';
import { SelectSize } from './SelectSize';

import '../Styles/Filter.scss';

export const Filter: React.FC<{ count: number }> = ({ count }): JSX.Element => {
	return (
		<>
			<SelectOrder />
			<SelectSize />
		</>
	);
};
