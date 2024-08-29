"use strict"

let array1=new Array(1,2,3,4,5)

// console.log("A",array1)

// let array2=array1.slice(1,3)
// console.log("Slice",array2)
// console.log("After slice original array",array1)

// let array3=array1.slice(1,3)
// console.log("spice",array1.splice(1,3))
// console.log("Original array after  splice", array1)


let array2=['a','b','c','d'];

//let array3=[...array1,...array2];
array1.push(array2);
console.log(array1);


array1.concat(array2);
console.log(array1);



