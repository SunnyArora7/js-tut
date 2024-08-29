"use strict"   

const arr=[1,2,3,4,4,5]
const stringarr="sunny"

for(const character of stringarr)
{
    console.log("char= "+ character)
}


const map= new Map()
map.set("name","sunny")
map.set("age",22)
map.set("school","bmps")
console.log(map)

for (const [key,value] of map) {
    console.log(key,value)
}

const obj1={
    name:"sunny",
    age:22
}

for (const key in obj1) {
  console.log(key +""+obj1[key])
}

arr.forEach((item)=>console.log(item))

const arr2=[
    {
        "name":"sunny",
        "age":22,
    },
    {
        "name":"raj",
        "age":21,
    },
    {
        "name":"bhvijk",
        "age":20,
    }
]


arr2.forEach((item)=>console.log(item.name))