function getArray() {
  let input = document.getElementById("inputArray").value;
  return input.split(",").map(Number);
}

function sortArray() {
  let arr = getArray();
  let algo = document.getElementById("algorithm").value;

  if (algo === "bubble") arr = bubbleSort(arr);
  if (algo === "selection") arr = selectionSort(arr);
  if (algo === "insertion") arr = insertionSort(arr);
  if (algo === "merge") arr = mergeSort(arr);
  if (algo === "quick") arr = quickSort(arr);

  document.getElementById("output").innerText =
    "Sorted Output: " + arr.join(", ");
}

/* Bubble Sort */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

/* Selection Sort */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

/* Insertion Sort */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

/* Merge Sort */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return result.concat(left, right);
}

/* Quick Sort */
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
