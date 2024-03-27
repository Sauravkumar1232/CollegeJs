let p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        let a = 12345;
        if(a==12345){
            resolve("excecuted....")
            // console.log(resolve)
        }else{
            reject("NOt Execute....")
        }
    }, 5000);
    })
console.log('p ' ,p)
p.then((result)=>{
console.log(result)
}).catch((error)=>{
 console.log(error ,'error')
})
console.log('p ' ,p)