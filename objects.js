"use strict"


const symName = Symbol("Key1")
//Object literals
let objectLit1 = {
    "name": "sunny",
    age: 20,
    school: "Bal Mandir",
    [symName]: "Symbol"
}

console.log(objectLit1.school)
console.log(objectLit1.name)

console.log(typeof symName)
console.log(objectLit1[symName])

//Object.freeze(objectLit1)
objectLit1.age = 22

console.log("freeze object:", objectLit1)


//funtion create in object

objectLit1.greet = function () {
    console.log("Hello Sunny")
}

console.log(objectLit1.greet())


//destructuring the object

let { school: HighSchool } = objectLit1
console.log(HighSchool)