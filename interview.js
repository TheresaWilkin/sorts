//Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.
//

//[3, 6, 8, 2, 5]

// [2, 3, __, 5, __ 6, 8]  

// [3, 6, 8, 2, 5]
// [1,1,0,1,1,0,1]
// arrayCount[1] += 1

// [2,3,5,6,8]

const linearSort = (array, min, max) => {
	let positionsArray = [];
	let sorted = []; 
	let diff;  

	for (var j = 0; j<array.length; j++) {
		diff = array[j]-min; 
		positionsArray[diff] = 1; 
	}
	console.log(positionsArray);

	for (var k = 0; k<positionsArray.length; k++) {
		if (positionsArray[k]) {
			sorted.push(k+min); 
		}
	}
	return sorted; 
}

console.log('linear', linearSort([3, 6, 8, 2, 5], 2, 8))

//Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).


//Imagine that I gave you twenty books to sort in alphabetical order. How would you go about it? Can you express this as an algorithm?

