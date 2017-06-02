function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false;
    }
    let reversed = arr.slice(0).reverse();
    let equal =
        (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}
console.log(isSymmetric([1,2,3,3,2,1]))
module.exports = { isSymmetric };