import React from 'react';
import Select, {
	ActionMeta,
	components,
	IndicatorProps,
	OptionTypeBase,
	ValueType,
} from 'react-select';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './styles.css';
interface User {
	name: string;
	id: string | number;
}
// interface Users {
//   users: User[];
// }
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
		console.log({ option, meta });
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
