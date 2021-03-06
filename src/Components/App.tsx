import '../Styles/App.scss';

import { Filter, IOrderByProps, ISizeProps } from './Filter';
import {
	ICartItem,
	IData,
	IProduct,
	IState,
} from '../Models/Interfaces/Interfaces';
import React, { useState } from 'react';
import { cartTotal, formatCurrency } from '../Utils/FormatCurrency';

import { Cart } from './Cart';
import { IOption } from '../Models/options';
import { Products } from './Products';
import { ValueType } from 'react-select';
import { proceed } from '../Utils/Payment';

export const App: React.FC<IData> = (data: IData): JSX.Element => {
	//
	const handleQuantity = (cartItem: ICartItem, delta: number) => {
		let cart = state.cart;
		let removeItem;
		let items;
		cart.items.forEach((item) => {
			if (item.product.id === cartItem.product.id) {
				if (item.quantity + delta > 0) {
					item.quantity += delta;
					cart.numberOfItems += delta;
					cart.total += delta * item.product.price;
				} else {
					removeItem = item;
				}
			}
		});
		if (removeItem) {
			// remove the model from the cart
			items = cart.items.filter(
				(item) => item.product.id !== cartItem.product.id
			);
			cart = { ...cart, items };
			cart.numberOfItems -= 1;
			console.log(
				'cart.numberOfItems cart.numberOfModels',
				cart.numberOfItems,
				cart.numberOfModels
			);
			cart.numberOfModels -= 1;
			cart.total -= cartItem.product.price;
		}
		setState({ ...state, cart });
	};
	const [state, setState] = useState<IState>({
		products: data.products.sort((a, b) => (a.id > b.id ? -1 : 1)),
		cart: { items: [], numberOfModels: 0, numberOfItems: 0, total: 0 },
		size: '',
		orderBy: '',
	});

	const onSelectSize = (value: ValueType<IOption, false>) => {
		if (value && value.value) {
			const size = value.value;
			const prods: IProduct[] = data.products.filter((product: IProduct) =>
				product.availableSizes.includes(size)
			);
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
		const prods = data.products.sort((a, b) => {
			return orderBy === 'lowest'
				? a.price < b.price
					? -1
					: 1
				: orderBy === 'highest'
				? a.price > b.price
					? -1
					: 1
				: a.id > b.id
				? -1
				: 1;
		});
		setState({
			...state,
			orderBy,
			products: prods,
		});
	};
	const addToCart = (product: IProduct) => {
		const items = state.cart.items.slice();
		const numberOfModels = state.cart.numberOfModels + 1;
		const total = state.cart.total + product.price;
		const numberOfItems = state.cart.numberOfItems + 1;
		if (items.some((el) => el.product.id === product.id)) {
			// item is already in the cart so increment its quantity
			const items = state.cart.items.slice(); // take items clone
			const ix = items.findIndex((item) => item.product.id === product.id);
			if (ix >= 0) {
				items[ix].quantity += 1;
				setState({
					...state,
					cart: { items, numberOfModels, numberOfItems, total },
				});
			} else {
				throw new Error(`addToCart findIndex falsely found index: ${ix}`);
			}
		} else {
			// new item not yet in the cart
			items.push({ product, quantity: 1 });
			setState({
				...state,
				cart: { items, numberOfModels, numberOfItems, total },
			});
		}
		// check if item is already in the cart so increment the quantity
	};
	const cartItemsNumber = (): JSX.Element => {
		let items = '';
		const buttonProceed = state.cart.numberOfItems ? (
			<div className='button-proceed' onClick={proceed}>
				proceed to order
			</div>
		) : (
			''
		);
		if (state.cart.numberOfItems > 1) {
			items = `(${state.cart.numberOfItems.toString()} items)`;
		}
		const number = (() => {
			switch (state.cart.numberOfModels) {
				case 0:
					return 'Cart is empty';
					break;
				case 1:
					return `1 model in the cart ${items}`;
					break;
				default:
					return `${state.cart.numberOfModels} models ${items}`;
			}
		})();
		return (
			<>
				<div className='total'>
					<div style={{ textAlign: 'right' }}>
						<span>{number}</span>
						<div>{cartTotal(state.cart.total)}</div>
					</div>
					<div style={{ width: '10.5rem' }}>{buttonProceed}</div>
				</div>
			</>
		);
	};
	const sizeProps: ISizeProps = {
		size: state.size,
		onSelectSize: onSelectSize,
	};
	const cartProps = {
		cart: state.cart,
		handleQuantity,
	};
	const orderByProps: IOrderByProps = {
		orderBy: state.orderBy,
		onSelectOrderBy: onSelectOrderBy,
	};
	const filterProps = {
		orderBy: orderByProps,
		size: sizeProps,
	};
	const props = { products: state.products, addToCart };
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
				<div className='cart-items-number'>{cartItemsNumber()}</div>
			</div>
			<div className='main-sidebar'>
				<Products props={props} />
				<div>
					<Cart {...cartProps} />
				</div>
				{/* <div className='total'>Total {formatCurrency(state.cart.total)}</div> */}
			</div>
			<div className='footer'>All Rights Reserved</div>
		</div>
	);
};
