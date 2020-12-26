import React from 'react';
import { SelectOrder } from './SelectOrder';
import { SelectSize } from './SelectSize';
import '../Styles/index.scss';
import '../Styles/Filter.scss';

export const Filter: React.FC<{ count: number }> = ({ count }): JSX.Element => {
	return (
		<>
			<div className='select-box'>
				<SelectOrder />
			</div>
			<div className='select-box'>
				<SelectSize />
			</div>
		</>
	);
};
