function selectionSort(array) {
    let tmp;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if (array[i] < array[j]) {
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;

            }
        }
    }
    return array;
}
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))