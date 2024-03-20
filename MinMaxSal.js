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

let j=0;
let min=employess[0].sal
let minsal = (employess)=>{
    employess.forEach((element,index)=>{
        if(element.sal<min){
            min=element.sal
            j=index;
        }
    })
    console.log("Min sal=> ",min , employess[j].name)
}
let max=employess[0].sal
let index=0;
let maxsal = (employess)=>{
    employess.forEach((element)=>{
        if(element.sal>max){
            max=element.sal
            index++
        }
    })
    console.log(index)
    console.log("Max sal=> ",max , employess[index+1].name)
}
 
let avgMinMax = (min,max)=>{
    console.log ((min+max)/2)
}




minsal(employess)
maxsal(employess)
avgMinMax(min,max)
