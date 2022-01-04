// nhận vào kiểu dữ liệu T, và convert kiểu đó sang array, và truyền sang ...rest
// return ra 1 dữ liệu T
function combinor<T>(...rest: T[]): T {
	return rest.reduce((previous: T, current: T) => {
		return previous + current;
	}, rest[0] || null);
}

const strs = combinor<string>('one', 'two');
const nums = combinor<number>(1, 2);