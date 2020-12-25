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
		<div className='grid-container'>
			<header>
				<a href='/'> React Shopping Cart </a>
			</header>
			<main>
				<div className='content'>
					<div className='main'>
						<Filter count={state.products.length} />
						<Products {...state.products} />
					</div>
					<div className='sidebar'>Cart Items</div>
				</div>
			</main>
			<footer>All rights reserved.</footer>
		</div>
	);
};
