const arr = [1, 3, 6, 4, 1, 2];
function solution(arr) {
	let result = 1;
	const set = new Set(arr);
	while (set.has(result)) {
		result++;
	}
	return result;
};

console.log(solution(arr));