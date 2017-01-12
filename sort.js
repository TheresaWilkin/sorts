//Bubble sort! 

//1) SWAP
	//takes array, two indices
	//declares a temp variable == to i element
	//replaces i with j element
	//replaces j element with temp (old i) element


//2)BUBBLESORT
	//start a count of # of swaps -- 0
	//for each element, if it's bigger than following element, switch them and add to swaps count
	//after loop, RETURN rerun loop if swaps > 0 (and reset swaps to 0)
	//return array
//
//

const swap = (array, i, j) => {
	var temp = array[i]; 
	array[i] = array[j]; 
	array[j] = temp; 
}

const bubbleSort = array => {
	var swaps = 0; 

	for (var i = 0; i<array.length; i++) {
		if(array[i] > array[i+1]) {
			swap(array, i, i+1); 
			swaps++; 
		}
	}

	if (swaps > 0) {
		bubbleSort(array); 
	}

	return array; 
}

console.log("bubble: ", bubbleSort([1, 0, 4,2,3,7,6,4,3,7,8,6,5]));


//MERGE SORT
//1) merge
	//pass in two arrays (left and right) 
	//set lI, rI, oI to 0




	//if lI element is smaller than rI el, 
//array[oI] = left[lI]; 
//oI++; 
//lI++; 
//
//
//
//2) mergesort
	//pass in array
	//if the array is only 0 or 1 long, return array
	//(base case)	
	//otherwise, middle = middle index
	//left is array up to middle
	//right is array from (including) middle to end
	//reassign left to the result of recursively calling mergeSort on left
	//reassign right to the same
	//return the left half recursive, the right half half recursive, 
	//			and the full array MERGED



const mergeSort = array => {
	if (array.length <= 1) {
		return array; 
	}

	var middle = Math.floor(array.length/2); 
	var left = array.slice(0, middle); 
	var right = array.slice(middle, array.length); 
	left = mergeSort(left); 
	right = mergeSort(right); 

	return merge (left, right); 
}
//
//[3,6,2,8,5]
//middle = 2
//left = [3,6]
	//middle = 3
	//left = [3]
	//right = [6]
	//merge returns [3,6]
//right = [2,8,5]
	//left = [2]
	//right = [8,5]
		//left = [8]
		//right = [5]
		//merge returns [5, 8]
	//merge returns [2, 5, 8]
//(left = [3,6], right = [2, 5, 8])
//merge returns [2, 3, 5, 6, 8]
//
//
//
var merge = function(left, right) {
	var array = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            array.push(left[0]);
            left.shift();
        }
        else {
            array.push(right[0]);
            right.shift();
        }
    }

    if (left.length > 0) {
    	array = array.concat(left);
    }
    if (right.length > 0) {
    	array = array.concat(right);
    }
    
    return array;
};


console.log("merge: ", mergeSort([1, 0, 4,2,3,7,6,4,3,7,8,6,5]));



//QUICKSORT
//1)quickSort 
	//if first time called, just pass array; start/end = 0
	//start = 0 or start; end = 0 or end
	//if start is bigger than or equal to end, return the array
	//the section you passed in is empty or invalid
	//otherwise,
	//middle is result of partition function
	//array is recursive of array and left of partition
	//now array is recursive of array and right of partition
	//and now we're returning array


var quickSort = function(array, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
    console.log("run a sort on", array.slice(start, end)); 
    if (start >= end) {
        return array;
    }
    var pivot = array[end - 1]; 
    var j = start;
    for (var i=start; i<end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    var middle = j;
    console.log("got ", array.slice(start, end));
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};


console.log("quick: ", quickSort([5,4,3,2,1]));

[]
//pivot = 5
//start 0
