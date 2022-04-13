function getDigit(number, place, longestNumber) {
    const string = number.toString();
    const size = string.length;

    const mod = longestNumber - size;
    return string[place - mod] || 0;
}

function getLongestNumber(array) {
    let longest = 0;

    for (let i = 0; i < array.length; i++) {
        const currentLength = array[i].toString().length;
        longest = currentLength > longest ?
            currentLength :
            longest;
    }

    return longest;
}

function radixSort(array) {
    const longestNumber = getLongestNumber(array);

    // this creates an array of 10 empty arrays
    const buckets = new Array(10).fill().map(() => []);

    for (let i = longestNumber - 1; i >= 0; i--) {
        while (array.length) {
            const current = array.shift();
            buckets[getDigit(current, i, longestNumber)].push(current);
        }

        for (let j = 0; j < buckets.length; j++) {
            while (buckets[j].length) {
                array.push(buckets[j].shift());
            }
        }
    }

    return array;
}

console.log(radixSort([
    20,
    51,
    3,
    801,
    415,
    62,
    4,
    17,
    19,
    11,
    1,
    100,
    1244,
    104,
    944,
    854,
    34,
    3000,
    3001,
    1200,
    633
]));

/**
 * 
 * - sorting happens on parts of each number in array
 * - ones sorted first, then tens, then hundreds, and so on...
 * - time complexity O (n˚k), spatial complexity O (n + k) - where k is maximum length of number
 * 
 */
