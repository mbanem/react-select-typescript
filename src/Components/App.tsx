import React, { useState } from 'react';
import { IData, IProduct } from '../Models/Interfaces/Interfaces';
import { Products } from './Products';
import { Filter } from './Filter';
import '../Styles/App.scss';
import { ISizeProps, IOrderByProps } from './Filter';
import { ValueType } from 'react-select';
import { IOption } from '../Models/options';
export const App: React.FC<IData> = (data: IData): JSX.Element => {
	const [state, setState] = useState<{
		products: IProduct[];
		size: string;
		orderBy: string;
	}>({
		products: data.products,
		size: '',
		orderBy: '',
	});

	const onSelectSize = (value: ValueType<IOption, false>) => {
		if (value && value.value) {
			const size = value.value;
			console.log('onSelectSize size', size, typeof size);
			const prods: IProduct[] = data.products.filter((product: IProduct) =>
				product.availableSizes.includes(size)
			);
			console.log('prods', prods);
			setState({
				...state,
				size,
				products: prods,
			});
		} else {
			setState({
				...state,
				size: '',
				products: data.products,
			});
		}
	};

	const onSelectOrderBy = (value: ValueType<IOption, false>) => {
		// console.log('onSelectOrderBy value', value);
		const orderBy = value?.value || '';
		console.log('onSelectOrderBy orderBy', orderBy);
		const prods = data.products.sort((a, b) => {
			return orderBy === 'lowest'
				? a.price < b.price
					? -1
					: 1
				: orderBy === 'highest'
				? a.price > b.price
					? -1
					: 1
				: a.id < b.id
				? -1
				: 1;
		});

		setState({
			...state,
			orderBy,
			products: prods,
		});
	};
	const sizeProps: ISizeProps = {
		size: state.size,
		onSelectSize: onSelectSize,
	};
	const orderByProps: IOrderByProps = {
		orderBy: state.orderBy,
		onSelectOrderBy: onSelectOrderBy,
	};
	const filterProps = {
		orderBy: orderByProps,
		size: sizeProps,
	};
	return (
		<div className='grid-band'>
			<div>
				<div className='title-band'>
					<a>React Shopping Cart</a>
				</div>
			</div>
			<div className='filter-band'>
				<div className='number-of-products'>
					{state.products.length} Products
				</div>
				<Filter {...filterProps} />
			</div>
			<div className='main-sidebar'>
				<Products {...state.products} />
				<div className='sidebar'>Cart Items</div>
			</div>
			<div className='footer'>All Rights Reserved</div>
		</div>
	);
};
