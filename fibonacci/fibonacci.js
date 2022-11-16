function fibs(num) {
	const sequence = [];
    for (let i = 0; i < num; i++) {
        (i < 2) ? sequence.push(i) : sequence.push((sequence[i - 2] + sequence[i - 1]));
	}

	return sequence;
}

function fibsRec(num) {
    if (num <= 0) return [];
	else if (num <= 2) return (num === 1) ? [0] : [0, 1];

	const sequence = fibsRec(num - 1);
	const sequenceLen = sequence.length - 1;
    sequence.push(sequence[sequenceLen - 1] + sequence[sequenceLen]);

	return sequence;
}

console.log(fibs(8));
console.log(fibs(15));
console.log(fibsRec(8));
console.log(fibsRec(15));