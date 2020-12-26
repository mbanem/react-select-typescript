export const customStyles = {
	menuList: (base: any) => ({
		...base,
		minHeight: 60,
		maxHeight: 240, // dropdown list height
	}),
	// un-open control w/o chevron
	control: (base: any) => ({
		...base,
		backgroundColor: 'aliceblue',
	}),
	// holds only placeholder message but not selected value
	placeholder: (base: any) => ({
		...base,
		fontSize: 17,
		// fontStyle: 'italic',
		width: 180,
		padding: '0 1rem',
		color: '#34348f',
	}),
};
