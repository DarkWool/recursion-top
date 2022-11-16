function mergeSort(list) {
    // Base case
    let listLen = list.length;
	if (listLen === 1) return list;

    // Recursive case
    // Divide the list in 2 (left and right) till you have arrays of length 1
	const leftHalf = mergeSort(list.slice(0, listLen / 2));
    const rightHalf = mergeSort(list.slice(listLen / 2));
    
    // Restart the array now that you don't need it
    list = [];
    
    // Merge both halves and sort them on the fly
	let i = 0, j = 0;
    while (leftHalf[i] && rightHalf[j]) {
        (leftHalf[i] < rightHalf[j]) ? list.push(leftHalf[i++]) : list.push(rightHalf[j++]);
    }

    // When one list is empty just copy the rest of the other one
	list = (i === leftHalf.length) ? list.concat(rightHalf.slice(j)) : list.concat(leftHalf.slice(i));
	return list;
}


console.log(mergeSort([4, 6, 10, 2]));
console.log(mergeSort([308, 60, 73, 271, 390, 528, 658, 472]));
console.log(mergeSort([11849, 5673, 202, 14748, 3610, 9033, 1907, 8723, 18576, 8959, 3031, 13024, 2919, 7383, 7757, 4988, 8153, 8212, 3399, 6562, 18059, 15758, 18802, 655, 19729, 2519, 16187, 7328]));
