//singleTon
// object.create- this gives us singleton

//object Listerals
// const details={
//     name:"Abhishek",
//     age:21,
//     address:"Police Line Etawah",
//     Email:"abhishek@google.com",
//     isLoggedIn:false,
//     lastLoginDay:["Monday","Tuesday"],
//     LastLocation:"Rajpura",
//     Id:"Student"
// }
// console.table([details.Email])

//nested object

const tinder={
    name:"Abhishek",
    person:"Good",
    FullName:{
        user:{
            Last:"Pal",
        }
    }
}
// Merge all the array in one 
const obj1={1:"a",2:"b"}
const obj2={2:"r",7:"c"}
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);



 
