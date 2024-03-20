
console.log("Start")

let students = [
  { name: "Ram", age: 20 },
  { name: "Mohan", age: 22 },
];

function addStudent(){
    setTimeout(function () {
        students.push({name:'Rohan',age:22})
    }, 5000);
}
function display(){
    setTimeout(function () {
         students.forEach(element => {
            console.log(element.name)
         });
    }, 3000);
}

addStudent()
display()
console.log("End")