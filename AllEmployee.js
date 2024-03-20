let employess =[
    {
        name:"Red",
        age:24,
        sal:50000
    },
    {
        name:"Blur",
        age:25,
        sal:2000
    },
    {
        name:"Pinky",
        age:27,
        sal:4000
    },
    {
        name:"Yellow",
        age:29,
        sal:60000
    },
    {
        name:"Black",
        age:30,
        sal:80000
    },
    
]
let allEmp = (employess)=>{
    let maxThaosand =[];
    employess.forEach(element => {
        if(element.sal>10000){
            console.log(element.sal,element.name )
            maxThaosand.push(element.name)
        }
    });
    console.log( (maxThaosand))
}

allEmp(employess)
