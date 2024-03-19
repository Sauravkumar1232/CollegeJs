let a=(fir,sec)=>{
    console.log("Arrow function" , fir,sec , 'Sum => ',fir+sec)
}
let sum = (a,b)=>{
   let totalMark=a.mark+b.mark
   console.log('Total Mark ',totalMark)
}

let student1= {
    name: "red",
    age:25,
    mark: 45}
let student2= {
    name: "black",
    age:34,
    mark: 50}
sum(student1,student2)


let first=10;
let second=20;
a(first,second);

var sumMark=0;
 let showStudent = (students)=>{
students.forEach((student) => {
    console.log(student.name)
     sumMark = sumMark+student.mark
    });
    console.log("Sum => ",sum)
 }
let students = [{
    name: 'red',
    age:25,
    mark: 45},
    {
    name: 'black',
    age:25,
    mark: 45},
    {
        name: 'pink',
        age:25,
        mark: 45},
    ]

    showStudent(students)
