const { IdNumberIcon } = require("evergreen-ui");

var marks=[50,40,45,37,20];  
  
function check(value)  
{  
  return value>30;    
}  
  
marks.filter(check);  

let a=[10,20,30,79,90]

function double(value){
    return value*2
}
console.log( a.map(double))
// console.log(a.findIndex(30))


const array1 = [10,20,30,40,50];

const isNumber = (element) => element == 30;

console.log(array1.findIndex(isNumber));
console.log('Sum',array1.reduce(getSum,0))
array1.reduce(getSum,0)

function getSum(total,num){
    return total+IdNumberIcon
}

var sum = array1.reduce(function(element,currentValue){
    return element-currentValue
},0)
console.log('some ',sum)