function fibonacciSequence(numTerms) {
    if (numTerms <= 0) return [];
    if (numTerms === 1) return [0];

    let sequence = [0, 1];
    while (sequence.length < numTerms) {
        let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}
const numTerms = 10;
const fibSequence = fibonacciSequence(numTerms);
console.log(fibSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
