import React from 'react';
import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
import { optionsOrderBy } from '../Models/options';
import { customStyles } from '../Utils/CustomStyles';
import { IOrderByProps } from './Filter';
// const SelectSizeComponents = makeAnimated();

export const SelectOrder: React.FC<IOrderByProps> = (props): JSX.Element => {
	customStyles;

	return (
		<div>
			<Select
				isClearable
				className='select-order-box'
				onChange={props.onSelectOrderBy}
				// closeMenuOnSelect={true}
				// components={SelectSizeComponents}
				// defaultValue={[colourOptions[4], colourOptions[5]]}
				// isMulti={state.isMulti}
				options={optionsOrderBy}
				styles={customStyles}
				placeholder='How to Sort'
			/>
			{/* <button onClick={toggleMulti}>toggle multi</button>
			<div>is multi: {state.isMulti.toString()}</div> */}
		</div>
	);
};
