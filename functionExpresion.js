 

let a = function (a,b){
    var c=a.mark+b.mark
    console.log("C" ,c)
    console.log("hello..")
}
let show = function (students){
    console.log(students)
    
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

    for(var i=0;i<students.length;i++){
        console.log(students[i].name)
    }

let student1= {
    name: "red",
    age:25,
    mark: 45}
let student2= {
    name: "black",
    age:34,
    mark: 50}
a(student1,student2);
console.log(typeof(a));


show(students)

 