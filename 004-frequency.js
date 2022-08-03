// My solution

function highestFrequency(array) {
	let tempArray = [];
	let found = false;
	let maximum = 0;
	let result = '';

	for (let i = 0; i < array.length; i++) {
		found = false;

		for (let j = 0; j < tempArray.length; j++) {
			if (array[i] === tempArray[j][0]) {
				tempArray[j][1]++;
				j = tempArray.length + 2;
				found = true;
			}
		}

		if (!found) {
			tempArray.push([array[i], 1]);
		}
	}

	for (let i = 0; i < tempArray.length; i++) {
		if (tempArray[i][1] > maximum) {
			maximum = tempArray[i][1];
			result = tempArray[i][0];
		}
	}

	return result;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])) // -> ghi

// Vladilen

function highestFrequency(array) {
	const map = {}
	let maxFreq = 0
	let maxFreqStr = array[0]

	for (let i = 0; i < array.length; i++) {
		const current = array[i]

		if (map[current]) {
			map[current]++
		} else {
			map[current] = 1
		}

		if (map[current] > maxFreq) {
			maxFreq = map[current]
			maxFreqStr = current
		}
	}

	return maxFreqStr
}