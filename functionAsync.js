
// console.log("Start")

// let students = [
//   { name: "Ram", age: 20 },
//   { name: "Mohan", age: 22 },
// ];

// function addStudent(callBack){
//     setTimeout(function () {
//         students.push({name:'Rohan',age:22})
//         callBack();
//     }, 5000);
// }
// function display(){
//     setTimeout(function () {
//          students.forEach(element => {
//             console.log(element.name)
//          })
//     }, 3000);
// }

// addStudent(display)
// // display()
// console.log("End")


let employess=[
    {
        name:"black",
        address:"Mohan Nagar",
        sal:20000
    },
    {
        name:"pink",
        address:"Vijay Nagar",
        sal:20000
    },{
        name:"Red",
        address:"Balram Nagar",
        sal:20000
    },

]
function   addEmployee(callBack){
   setTimeout(function () {
       employess.push({name:'Rohan',address:"Loni",sal:21000})
       callBack();
   }, 5000);
   }

   function display(){
    setTimeout(function () {
         employess.forEach(element => {
            console.log(element.name)
         })
    }, 3000);
}
addEmployee(display);