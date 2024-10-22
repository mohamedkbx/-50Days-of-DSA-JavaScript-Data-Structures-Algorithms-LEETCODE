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
