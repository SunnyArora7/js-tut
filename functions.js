// "use strict"


//Immediately Invoked Function with name
(function chai(){
    console.log("hello user");
})();

//Immediately Invoked Function with arrow 
((userJi)=>console.log("hello user" + userJi))("sunny");

//normal function
function add1(num1 , num2)
{
    return num1+num2
}

//Variable function
const add2=function(num1,num2)
{
    return num1+num2
}

//Arrow function
const add3=(num1,num2) => (num1 + num2)


//arrow function returning object

const hello=()=>({username:"sunny"})


console.log(add1(12,18))
console.log(add2(1,2))
console.log(add3(2,2))

console.log(hello())




