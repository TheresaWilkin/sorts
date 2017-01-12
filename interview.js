//Write an O(n) algorithm to sort an array of integers, where you know in 
//advance what the lowest and highest values are.
//


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

//Write an algorithm to shuffle an array into a random order in-place 
//(i.e. without creating a new array).

const swap = (array, i, j) => {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

const randomize = (array) => {
	let j;
	for(var i = 0; i<array.length; i++) {
		j = Math.floor(Math.random() * array.length);
		swap(array, i, j);
	}
	return array;
}

console.log(randomize([1,2,3,4,5]));

//Imagine that I gave you twenty books to sort in alphabetical order. 
//How would you go about it? Can you express this as an algorithm?

function insertionSort(values) {
  var length = values.length;
  for(var i = 1; i < length; ++i) {
    var key = values[i];
    for(var j = i - 1; j >= 0 && values[j] > key; --j) {
      values[j+1] = values[j];
    }
    values[j+1] = key;
  }
  return values;
};
//console.log(insertionSort([7, 4, 5, 2, 9, 1]));

const bookSort = (books) => {
	let piles = {};
	for(let i = 0; i < books.length; i++) {
		let pile = books[i][0];
		if (piles[pile]) {
			piles[pile].push(books[i]);
		} else {
			piles[pile] = [books[i]];
		}
	}
	for(var pile in piles) {
		piles[pile] = insertionSort(piles[pile]);
	}
	let ret = [];
	for(var pile in piles) {
		ret = ret.concat(piles[pile]);
	}
	return ret;
}

console.log(bookSort(["Aardvarks: A History", "Bananas", "Baboons", "Apple"]))
