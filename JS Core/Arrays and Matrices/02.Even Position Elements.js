function evenPositions(arr) {
    console.log(arr.filter((x, i) => i%2 == 0).join(' '));

}
evenPositions(['20', '30', '40']);