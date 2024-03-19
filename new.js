let employee= [{
    'name': "red",
    'age':25,
    'salary': 10000},
    {
    'name': "black",
    'age':34,
    'salary': 20000},
    {
    'name': "pink",
    'age':22,
    'salary': 30000},
    {
    'name': "brown",
    'age':29,
    'salary': 50000},
    ]
    var totalSal=0;
    for(var i=0; i<=employee.length;i++){
    
    // // console.log(employee[i].age);
    // console.log("=================");
    
    // totalSal=totalSal+employee[i].salary
    
    
    // if(employee[i].salary>10000){
    // console.log("dfgh=>"+ employee[i].name);
    // }
    
    // console.log(totalSal);
    
    
     }
    let max=employee[0].salary;
    console.log(max)

    for(var i=0; i<=employee.length;i++){
        if(max < employee[i].salary){
            max=employee[i].salary;

        }
    }
    console.log(max)
