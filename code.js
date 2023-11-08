function quicksort(array) {
    const pivot = array[0];
    const leftArr = []
    const rightArr = []

    if (array.length <= 1){
        return array;
    }

    for (i = 1; i <array.length; i++){
        if (array[i] < pivot) {
            leftArr.push(array[i]);
        } else {
            rightArr.push(array[i])
        }
    }

    return (quicksort(leftArr).concat(pivot)).concat(quicksort(rightArr))
}