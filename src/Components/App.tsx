// Feature 1
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
		<>
			<div className='flex-cont'>
				<div>{state.products.length} Products</div>
				<Filter count={state.products.length} />
			</div>
			<Products {...state.products} />
			<div className='sidebar'>Cart Items</div>
		</>
	);
};
