export const timeDifference = (date1, date2) => {
	const dateDiff = date1 - date2;
	console.log(Math.floor(dateDiff / 60e3), 'minutes ago');
	return Math.floor(dateDiff / 60e3);
};
