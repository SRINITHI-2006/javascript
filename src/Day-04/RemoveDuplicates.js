function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));
//output:[1,2,3,4,5]
