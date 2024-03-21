console.log("Welcome ")
getCustomer(1,(customer)=>{
    console.log(customer)
    getProduct(customer.name , (product)=>{
        console.log(product)
        getProductPrice(product[0],(price)=>{
            console.log(price)
        })
    } )
})

console.log("End....")


 
function getCustomer(id, callBack) {
    setTimeout(() => {
      callBack({ id: id, name: "Customer " });
      // return {id: id,name:'Nausad'}
    //   select customer from customer where id=id
    }, 5000);
  }
  
  function getProduct(id,callBack) {
    setTimeout(() => {
      // return ['p1','p2','p3']
//   select product from product where proId=id
      callBack(["p1", "p2", "p3"]);
    }, 3000);
  }
  
  function getProductPrice(product, callBack) {
    setTimeout(() => {
      callBack(["c1", "c2", "c3"]);
      // return ['c1','c2','c3']
    }, 2000);
  }
  