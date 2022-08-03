// My solution

function arraySubset(source, subset) {
	let found = false;

	if (source.length < subset.length) return false;

	for (let i = 0; i < subset.length; i++) {
		found = false;
		for (let j = 0; j < source.length; j++) {
			if (subset[i] === source[j]) {
				found = true;
				source[j] = undefined;
				j = source.length + 2;
			}
		}
		if (found === false) return false;
	}

	return true;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false

// Vladilen

function arraySubset(source, subset) {
	if (source.length < subset.length) {
		return false
	}

	for (let i = 0; i < subset.length; i++) {
		const index = source.indexOf(subset[i])
		if (index === -1) {
			return false
		}
		delete source[index]
	}
	return true
}