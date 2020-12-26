import React from 'react';
import { SelectOrder } from './SelectOrder';
import { SelectSize } from './SelectSize';

import '../Styles/Filter.scss';
import { IProduct } from '../Models/Interfaces/Interfaces';
import { ValueType } from 'react-select';
import { IOption } from '../Models/options';
export interface ISizeProps {
	size: string;
	onSelectSize: (value: ValueType<IOption, false>) => void;
}
export interface IOrderByProps {
	orderBy: string;
	onSelectOrderBy: (value: ValueType<IOption, false>) => void;
}
export interface IFilterProps {
	orderBy: IOrderByProps;
	size: ISizeProps;
}
export const Filter: React.FC<IFilterProps> = (props): JSX.Element => {
	return (
		<>
			<SelectOrder {...props.orderBy} />
			<SelectSize {...props.size} />
		</>
	);
};
