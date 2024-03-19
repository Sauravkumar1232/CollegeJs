let employees= [{
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
    {
        'name': "yellow",
        'age':29,
        'salary': 80000},
    ]
let avg=0;
   let avgSal = (employees)=>{
    employees.forEach(element => {
        avg= (avg+element.salary)/5
       
        
    });
    console.log('Avg sal =>',avg)
   }  
   avgSal(employees)