function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr))
        return NaN;
    if (startIndex < 0)
        startIndex = 0;
    if (endIndex > arr.length - 1)
        endIndex = arr.length - 1;
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++)
        sum += Number(arr[i]);
    //console.log(sum);
    return sum;
}

subsum([10, 20, 30, 40, 50, 60], 3, 300);
subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subsum([10, 'twenty', 30, 40], 0, 2);
subsum([], 0, 0);
subsum([], 1, 2);
subsum('text', 0, 2);
subsum({}, 0, 2);




