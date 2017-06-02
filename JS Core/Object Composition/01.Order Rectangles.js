function orderRectangles(input) {
    let rectangles = [];
    for (let line of input){
        let rect = (function () {
            let current =       {
                width: Number(line[0]),
                height: Number(line[1]),
                area: function () {
                    return current.width * current.height;
                },
                compareTo: function (other) {
                    let result = other.area() - current.area();
                    return result || other.width - current.width;
                }
            };
            return current;
        }) ();
        rectangles.push(rect);
    }
    return rectangles.sort((a,b) => a.compareTo(b));
}


console.log(orderRectangles([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]]));