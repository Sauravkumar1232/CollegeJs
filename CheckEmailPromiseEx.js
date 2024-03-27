let p = new Promise((resole,reject)=>{
    setTimeout(() => {
       let email ="saurav"
    
       if(email.includes("@")){
        resole("Present")
       } 
       else{
        reject("Not ")
       }
    }, 1000);
})

p.then((result)=>{
    console.log(result)
    }).catch((error)=>{
     console.log(error ,'error')
    })
    console.log('p ' ,p)
    