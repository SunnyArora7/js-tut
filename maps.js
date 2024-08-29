"use strict"

const arr = [1, 2, 3, 4, 5, 6]

const arr2 = arr.map((item) => item * 10).filter((item) => item > 30)

console.log(arr2)


//reduce 

const total = arr.reduce(((acc, item) => acc + item), 0)

console.log(total)