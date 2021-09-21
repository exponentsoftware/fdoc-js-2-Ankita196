const countries = [
	'ALBANIA',
	'BOLIVIA',
	'CANADA',
	'DENMARK',
	'ETHIOPIA',
	'FINLAND',
	'GERMANY',
	'HUNGARY',
	'IRELAND',
	'JAPAN',
	'KENYA'
];

function createArrayOfArrays(countries) {
	const result = countries.map(x => {
		return [
			x.charAt(0) + x.slice(1).toLowerCase(),
			x.substring(0, 3),
			x.length
		];
	});
	return result;
}
console.log(createArrayOfArrays(countries));
