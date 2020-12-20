import React from 'react';
import Select, {
	ActionMeta,
	components,
	IndicatorProps,
	OptionTypeBase,
	ValueType,
} from 'react-select';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './styles.scss';
import { colourOptions } from './models/data';

// -- ---------- Custom Control Wrapping Select Box --------
const controlStyles = {
	borderRadius: '1px solid black',
	padding: '5px',
	background: colourOptions[2].color,
	color: 'white',
};

const ControlComponent = (props: any) => (
	<div style={controlStyles}>
		{
			// cannot sent style over above props. do not know how
			<p
				style={{
					paddingLeft: '1rem',
					fontWeight: 'bold',
					fontFamily: 'Helvetica, Arial',
					color: 'yellow',
				}}
			>
				Custom Control
			</p>
		}
		<components.Control {...props} />
	</div>
);

// ---------------- End Custom Control Wrapping Select Box ------------------
interface User {
	name: string;
	id: string | number;
}
interface SelectButtonProps {
	onSelect: (user: User) => void;
	users: User[];
	stateId: string;
}
const users: User[] = [
	{
		name: 'Mary Cotton',
		id: 1,
	},
	{
		name: 'Joe Matting',
		id: 2,
	},
	{
		name: 'Marko Milutinovic',
		id: 3,
	},
	{
		name: 'Mia Milutinovic',
		id: 4,
	},
	{
		name: 'Filip Isakovic',
		id: 5,
	},
	{
		name: 'Matia Isakovic',
		id: 6,
	},
	{
		name: 'Ljuban Milutinovic',
		id: 7,
	},
	{
		name: 'Milka Milutinovic',
		id: 8,
	},
	{
		name: 'Bane Milutinovic',
		id: 9,
	},
];
// defined outside of SelectUserButton so that you can use it on other Selects
// export const ArrowDropdownIndicator = (props: IndicatorProps<any>) => {
// 	return (
// 		<components.DropdownIndicator {...props}>
// 			<ArrowDropDownIcon id='arrow_icon' />
// 		</components.DropdownIndicator>
// 	);
// };

const SelectUserButton: React.FunctionComponent<SelectButtonProps> = ({
	onSelect,
	users,
	stateId,
}) => {
	const options: OptionTypeBase[] = users.map((user: User) => ({
		label: user.name,
		value: user.id,
	}));
	const handleChange = (
		option: ValueType<OptionTypeBase, false>,
		meta: ActionMeta<any>
	): void => {
		console.log('option', option);
		console.log('meta', meta);
		console.log('option?.label, option?.value', option?.label, option?.value);
		console.log('meta.action, meta.name', meta.action, meta.name);
		onSelect({
			name: option && option.label,
			id: option && option.value,
		});
	};
	return (
		<div className='select__user'>
			<label htmlFor='react-select-container'>Users</label>
			<Select
				name='user'
				className='select-box'
				// components={{ DropdownIndicator: ArrowDropdownIndicator }}
				options={options}
				onChange={handleChange}
				maxMenuHeight={120}
				placeholder={stateId}
			/>
			<Select
				className='select-box'
				defaultValue={colourOptions[0]}
				isClearable
				components={{ Control: ControlComponent }}
				isSearchable
				name='color'
				isMulti
				options={colourOptions}
			/>
		</div>
	);
};

// ------------  THE APP --------------------
export default function App() {
	const stateId = 'Select a user name';
	return (
		<SelectUserButton
			stateId={stateId}
			users={users}
			onSelect={(user) => {
				console.log('you have selected user ' + user.name);
			}}
		/>
	);
}
