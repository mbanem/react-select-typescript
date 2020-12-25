import React from 'react';
import { ClearSelect } from './ClearSelect';
import './AppClear.scss';
export const AppClear: React.FC = (): JSX.Element => {
	console.log('in AppClear');
	return (
		<div className='grid-container'>
			<header>
				<a href='/'> React Shopping Cart </a>
			</header>
			<main>
				<div className='content'>
					<div className='main'>
						<div>Total 6 Products</div>
						<ClearSelect />
						<ClearSelect />
					</div>
					<div className='sidebar'>Cart Items</div>
				</div>
			</main>
			<footer>All rights reserved.</footer>
		</div>
	);
};
