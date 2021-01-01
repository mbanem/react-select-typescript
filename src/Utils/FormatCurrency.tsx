import React from 'react';

export const formatCurrency = (num: number) => {
	const dec = ['.00', '0', ''];
	const number = Math.round(num * 100) / 100;
	const m = number.toLocaleString().match(/(\d+)\.?(\d*)?/);
	if (m) {
		const length = m[2] ? m[2].length : 0;
		return `$${number}${dec[length]}`;
	}
	throw new Error(`formatCurrency: invalid entry ${num}`);
};

export const cartTotal: React.FC<number> = (num: number): JSX.Element => {
	if (num <= 0) {
		return <div>&nbsp;</div>;
	}
	const total = formatCurrency(num);
	return (
		<div>
			Total <b>{total}</b>
		</div>
	);
};
