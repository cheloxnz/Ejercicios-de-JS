const valorMax = (array) => {

    var max = array[1] - array[0]
    for (let i = 0; i < array.length; i++) {
        for (let h = i + 1; h < array.length; h++) {
            var res = array[i] - array[h]
            max = res > max ? res : max;
        }
    }
    return max;
}

    // var array = [11,2,9,3,5]
    // console.log(valorMax(array))