// @flow

import React from 'react';

import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
import { optionsSize } from '../Models/options';
import { customStyles } from '../Utils/CustomStyles';

// const SelectSizeComponents = makeAnimated();
// interface IOptionsSize{
//   label: string;
//   value: string;
// }
// export const SelectSize: React.FC<IOptionsSize[]> = (options): JSX.Element => {
export const SelectSize: React.FC = (): JSX.Element => {
	// const [state, setState] = React.useState({ isMulti: false });
	// const [color, setColor] = React.useState<{
	// 	backGround: string;
	// 	foreGround: string;
	// }>({ backGround: 'yellow', foreGround: 'red' });
	// const toggleMulti = () => {
	// 	const multi = !state.isMulti;
	// 	setState({ isMulti: multi });
	// 	const clr =
	// 		color.backGround === 'yellow'
	// 			? ['white', 'lightgreen']
	// 			: ['red', 'cornsilk'];
	// 	setColor({ foreGround: clr[0], backGround: clr[1] });
	// };

	customStyles;
	return (
		<>
			<Select
				isClearable
				className='select-size-box'
				// closeMenuOnSelect={true}
				// components={SelectSizeComponents}
				// defaultValue={[colourOptions[4], colourOptions[5]]}
				// isMulti={state.isMulti}
				options={optionsSize}
				styles={customStyles}
				placeholder='Select Dress Size'
			/>
			{/* <button onClick={toggleMulti}>toggle multi</button>
			<div>is multi: {state.isMulti.toString()}</div> */}
		</>
	);
};
