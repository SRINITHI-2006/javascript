// An array is an ordered list of values, accessed by index starting at 0.
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);      // "apple"
console.log(fruits[2]);      // "mango"
console.log(fruits.length);  // 3
 
// ---------- Adding & Removing Items ----------

// push -> adds to the END
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "mango", "orange"]
 
// pop -> removes from the END
fruits.pop();
console.log(fruits); // ["apple", "banana", "mango"]
 
// unshift -> adds to the START
fruits.unshift("grape");
console.log(fruits); // ["grape", "apple", "banana", "mango"]
 
// shift -> removes from the START
fruits.shift();
console.log(fruits); // ["apple", "banana", "mango"]
