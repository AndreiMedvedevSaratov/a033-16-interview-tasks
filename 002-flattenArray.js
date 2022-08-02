// My solution

function flatten(array) {
	const result = []

	for (let i = 0; i < array.length; i++) {
		if (!Array.isArray(array[i])) {
			result.push(array[i])
		} else {
			const flat = flatten(array[i])
			for (let j = 0; j < flat.length; j++) {
				result.push(flat[j])
			}
		}
	}

	return result
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]

// Vladilen

function flatten(array) {
	const res = []

	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			const flat = flatten(array[i])
			for (let j = 0; j < flat.length; j++) {
				res.push(flat[j])
			}
		} else {
			res.push(array[i])
		}
	}

	return res
}