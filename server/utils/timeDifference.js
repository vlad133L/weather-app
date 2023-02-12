export function timeDifference(millis) {
	const millisPassed = Date.now() - millis;
	const minutesPassed = millisPassed / 60000;
	return minutesPassed;
}
