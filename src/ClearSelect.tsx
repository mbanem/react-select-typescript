import React from 'react';
import Select, { ValueType } from 'react-select';
import { IOption, optionsSize } from './Models/options';
import './styles.scss';

interface IState {
	select: {
		value: IOption;
		options: IOption[];
	};
}
const customStyles = {
	menuList: (base: any) => ({
		...base,
		height: 240, // dropdown list height
		minHeight: 60,
		fontSize: 19,
	}),
	control: (base: any) => ({
		...base,
		color: 'navy',
		fontSize: 20,
		// lineHeight: '20px',
		verticalAlign: 'bottom',
		width: 300,
		backgroundColor: 'cornsilk',
	}),
	valueContainer: (base: any) => ({
		...base,
		width: 200,
		display: 'inline-block',
	}),
	placeholder: (base: any) => ({
		...base,
		fontSize: 20,
		fontStyle: 'italic',
		padding: '0 1rem',
		color: 'red',
		backgroundColor: 'transparent',
	}),
};
export const ClearSelect: React.FC = (props): JSX.Element => {
	const [state, setState] = React.useState<IState>({
		select: {
			value: optionsSize[0],
			options: optionsSize,
		},
	});
	const setValue = (value: any) => {
		setState((prevState) => ({
			select: {
				...prevState.select,
				value,
			},
		}));
	};
	const handleChange = (value: ValueType<IOption, false>) => {
		setValue(value);
	};
	return (
		<>
			<Select
				name='dress-size'
				isClearable
				className='select-box'
				value={state.select.value}
				onChange={handleChange}
				options={state.select.options}
				styles={customStyles}
				placeholder={'Select Dress Size'}
			/>
		</>
	);
};
