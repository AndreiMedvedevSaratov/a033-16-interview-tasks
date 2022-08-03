// My solution

function allAnagrams(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].split('').sort((a, b) => a > b ? 1 : -1);
	}
	for (let i = 1; i < array.length; i++) {
		if (array[i - 1].join() !== array[i].join()) return false;
	}
	return true;
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false

// Vladilen

function allAnagrams(array) {
	const sorted = array.map(str => str.split('').sort().join(''))

	for (let i = 1; i < sorted.length; i++) {
		if (sorted[i] !== sorted[0]) {
			return false
		}
	}
	return true
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
