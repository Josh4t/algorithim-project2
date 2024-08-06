// script.js
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

function sortArray() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number);
    const sortedArray = insertionSort(array);
    document.getElementById('result').textContent = 'Sorted Array: ' + sortedArray.join(', ');
}
