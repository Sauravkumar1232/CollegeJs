
// Promise handle by callBack
// ==================================================================
console.log('strat..')
getCustomer(1,(customer)=>{
    console.log(customer,'customer')
    if(customer.isMembership){

        getMovies((movies)=>{
            console.log(movies)
            getTicketPrice(movies[0],(price)=>{
                console.log(price)
            })
        })
    }
})

function getCustomer(id,callBack){
    setTimeout(() => {
        callBack({ id: id, name: "Nausad",isMembership:true });
        // return {id: id,name:'Nausad'}
      }, 2000);
}

function getMovies( callBack) {
    setTimeout(() => {
      // return ['p1','p2','p3']
  
      callBack(["M1", "M2", "M3"]);
    }, 3000);
  }

  function getTicketPrice(movie,callBack){
    
        setTimeout(() => {
          // return ['p1','p2','p3']
      
          callBack(100);
        }, 3000);
      }
  
      // Pro