let employess =[
    {
        name:"Red",
        age:24,
        sal:50000
    },
    {
        name:"Blur",
        age:25,
        sal:20000
    },
    {
        name:"Pinky",
        age:27,
        sal:40000
    },
    {
        name:"Yellow",
        age:29,
        sal:60000
    },
    
]

let show = (employess)=>{
employess.forEach(element => {
    console.log(element.name)
});
}
show(employess)

let min=employess[0].sal
let minsal = (employess)=>{
    employess.forEach(element=>{
        if(element.sal<min){
            min=element.sal
        }
    })
    console.log("Min sal=> ",min)
}
let max=employess[0].sal
let maxsal = (employess)=>{
    employess.forEach(element=>{
        if(element.sal>max){
            max=element.sal
        }
    })
    console.log("Max sal=> ",max)
}

minsal(employess)
maxsal(employess)