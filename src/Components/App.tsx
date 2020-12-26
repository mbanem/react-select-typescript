import React, { useState } from 'react';
import { IData, IProduct } from '../Models/Interfaces/Interfaces';
import { Products } from './Products';
import { Filter } from './Filter';
import '../Styles/App.scss';

export const App: React.FC<IData> = (data: IData): JSX.Element => {
	const [state] = useState<{
		products: IProduct[];
		size: string;
		sort: string;
	}>({
		products: data.products,
		size: '',
		sort: '',
	});
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
				<Filter count={state.products.length} />
			</div>
			<div className='main-sidebar'>
				<Products {...state.products} />
				<div className='sidebar'>Cart Items</div>
			</div>
			<div className='footer'>All Rights Reserved</div>
		</div>
	);
};
