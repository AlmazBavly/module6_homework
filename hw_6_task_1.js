function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i] === 0) {
        zeroCount++;
      } else if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  console.log(`В массиве ${evenCount} четных чисел, ${oddCount} нечетных чисел, ${zeroCount} нулевых элементов`);
}

const arr = [1, "2", 0, null, 6, 3, "str", undefined, 8, 0, 9, 5];
countEvenOdd(arr);
