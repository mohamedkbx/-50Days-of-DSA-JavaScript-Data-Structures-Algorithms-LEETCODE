// Accessing and Setting
const arr = [1, 2, 3, 4];
console.log(arr[3]);
arr[3] = 5;

// Traversing and Searching

const arr = [1, 2, 3, 4];
console.log(arr[3]); // Output: 4
arr[3] = 5;

// Traversing and Searching
// Traversing the array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Searching for an element in the array
const target = 3;
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    found = true;
    console.log(`Element ${target} found at index ${i}`);
    break;
  }
}

if (!found) {
  console.log(`Element ${target} not found in the array`);
}
// Copy the array :
// Original array
const originalArray = [1, 2, 3, 4];

// Copying the array using slice method
const copiedArray = originalArray.slice();

// Copying the array using spread operator
const copiedArraySpread = [...originalArray];

// Modifying the copied arrays to demonstrate they are separate from the original
copiedArray[0] = 10;
copiedArraySpread[1] = 20;

console.log("Original Array:", originalArray); // Output: [1, 2, 3, 4]
console.log("Copied Array (slice):", copiedArray); // Output: [10, 2, 3, 4]
console.log("Copied Array (spread):", copiedArraySpread); // Output: [1, 20, 3, 4]

// with loop :
// Original array
const numbers = [1, 2, 3, 4];

// Copying the array using a loop
const copiedArrayLoop = [];
for (let i = 0; i < numbers.length; i++) {
  copiedArrayLoop.push(numbers[i]);
}

// Modifying the copied array to demonstrate it is separate from the original
copiedArrayLoop[0] = 10;

console.log("Original Array:", numbers); // Output: [1, 2, 3, 4]
console.log("Copied Array (loop):", copiedArrayLoop); // Output: [10, 2, 3, 4]
