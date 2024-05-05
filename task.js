function solution(arr) {
	const obj = {};
	let previousSum = arr[0] + arr[1];
	obj[previousSum] = 1;
	for (let i = 1; i < arr.length - 1; i++) {
		const sum = arr[i] + arr[i + 1];
		if (sum !== previousSum) {
			obj[sum] = (obj[sum] || 0) + 1;
			previousSum = sum;
		} else {
			previousSum = -1;
		}
	}

	let max = -1;
	for (const key in obj) {
		if (obj[key] > max) {
			max = obj[key];
		}
	}
	console.log(arr);
	console.log(max);
	return max;
}
solution([10, 1, 3, 1, 2, 2, 1, 0, 4]);
solution([5, 3, 1, 3, 2, 3]);
solution([9, 9, 9, 9, 9]);
solution([1, 5, 2, 4, 3, 3]);
