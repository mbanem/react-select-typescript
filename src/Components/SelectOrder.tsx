import React from 'react';

import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
import { optionsOrder } from '../Models/options';
import { customStyles } from '../Utils/CustomStyles';
// const SelectSizeComponents = makeAnimated();

export const SelectOrder: React.FC = (): JSX.Element => {
	customStyles;

	return (
		<div>
			<Select
				isClearable
				className='select-order-box'
				// closeMenuOnSelect={true}
				// components={SelectSizeComponents}
				// defaultValue={[colourOptions[4], colourOptions[5]]}
				// isMulti={state.isMulti}
				options={optionsOrder}
				styles={customStyles}
				placeholder='How to Sort'
			/>
			{/* <button onClick={toggleMulti}>toggle multi</button>
			<div>is multi: {state.isMulti.toString()}</div> */}
		</div>
	);
};
