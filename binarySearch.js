function binarySearch(id, array) {
    let half = Math.floor(array.length / 2);
    let length = array.length;
    
    while (length > 1) {
        if (array[half].id === id) {
            return array[half];
        }

        if (array[half].id > id) {
            array = array.slice(0, half);
            half = Math.floor(array.length / 2);
            length = array.length;
        }

        if (array[half].id < id) {
            array = array.slice(half);
            half = Math.floor(array.length / 2);
            length = array.length;
        }
    }

    return void 0;
}

console.log(binarySearch(3, [
    { id: 1, name: "Sam" },
    { id: 3, name: "Sarah" },
    { id: 5, name: "John" },
    { id: 6, name: "Burke" },
    { id: 10, name: "Simona" },
    { id: 12, name: "Asim" },
    { id: 13, name: "Niki" },
    { id: 15, name: "Aysegul" },
    { id: 17, name: "Kyle" },
    { id: 18, name: "Jem" },
    { id: 19, name: "Marc" },
    { id: 21, name: "Chris" },
    { id: 24, name: "Ben" }
]))

/**
 * 
 * - used for already sorted arrays
 * - start in the middle and check if middle is equal to search value
 * - if search value is smaller, look in left portion
 * - if larger look in right portion
 * 
 */

/*

course solution:

function binarySearch(id, array) {
  let min = 0;
  let max = array.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = array[index];

    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }
  }

  return void 0;
}

*/
