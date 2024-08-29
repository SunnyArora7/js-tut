"use strict"

const arr=[1,2,3,4,4,5]

const num=arr.filter((number)=>number>3)

console.log(num)


const num2=[]
arr.forEach(function (num){
   if(num>3)
   {
    num2.push(num)
   }

})

console.log(num2)
