import React from 'react';
import { SelectOrder } from './SelectOrder';
import { SelectSize } from './SelectSize';
import '../Styles/index.scss';
import '../Styles/Filter.scss';

export const Filter: React.FC<{ count: number }> = ({ count }): JSX.Element => {
	return (
		<div className='grid-container'>
			<header>
				<a href='/'> React Shopping Cart </a>
			</header>
			<main>
				<div className='content'>
					<div className='main'>
						<SelectOrder />
						<SelectSize />
					</div>
					<div className='sidebar'>Cart Items</div>
				</div>
			</main>
			<footer>All rights reserved.</footer>
		</div>
	);
};
