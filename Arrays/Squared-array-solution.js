function sortedSquaredArray(array) {
  const newArray = new Array(array.length).fill(0);
  pointerLeft = 0;
  pointerRight = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = Math.pow(array[pointerLeft], 2);
    const rightSquared = Math.pow(array[pointerRight], 2);
    if (leftSquared > rightSquared) {
      newArray[i] = leftSquared;
      pointerLeft++;
    } else {
      newArray[i] = rightSquared;
      rightSquared--;
    }
  }
  return newArray;
}

console.log(sortedSquaredArray([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
