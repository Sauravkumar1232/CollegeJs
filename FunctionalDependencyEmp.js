// let user = { id: 1, name: "saurav" };
console.log("start");
// getUser(1)
//   .then((user) => {
//     console.log(user, "user");
//     return getRepos(user.name);
// })
// // .catch((error) => {
// //   console.log("error", error);  // give error user undefined because of repos does not any value
// // })
//   .then((repos) => {
//     console.log(repos, "user");
//     return getCommit(repos[0]);
//   })
//   .then((commits) => {
//     console.log(commits, "commits");
//   }).catch((error) => {
//        console.log("error", error);
//      })
// getUser(11)
// .then(user=> getRepos(user.name))
// .then(repos=>getCommit(repos[0]))
// .then(commit=>console.log(commit,'commit'))
// .catch((error)=>{console.log('error'),error})


async function display(){
    try {
        
        console.log("start...")
        let user = await getUser(1);
        console.log(user,"user")
        
        let repos = await getRepos(user.name)
        console.log(repos,"repo")
    
        let commit = await getCommit(repos[0])
        console.log(commit,"commit")
        console.log("end...")
    } catch (error) {
         console.log(error,'error')
    }



}
display()
// getUser(11)
// .then(user=> getRepos(user.name))
// .then(repos=>getCommit(repos[0]))
// .then(commit=>console.log(commit,'commit'))
// .catch((error)=>{console.log('error'),error})

console.log("end..");
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetch the user data from db");
      if (id === 1) {
        resolve({ id: id, name: "saurav" });
      } else {
        reject("data not found");
      }
    }, 1000);
  });
}

function getRepos(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching the user repos from db");

      resolve(["R1", "R2", "R3"]);
    }, 1000);
  });
}

function getCommit(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching the user commit from db");
      resolve(["c1", "c2", "c3"]);
    }, 1000);
  });
}
