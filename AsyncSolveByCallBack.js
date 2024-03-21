console.log("welcome");
getUser(1, (user) => {
  console.log(user);
  getRepos(user.name, (repos) => {
    console.log(repos);
    getCommit(repos[0], (commits) => {
      console.log(commits);
    });
  });
});

// let repos=getRepos(user.name)
// console.log(repos)

// let commits=getCommit(repos[0])
// console.log(commits ,'commit')

console.log("end..");

function getUser(id, callBack) {
  setTimeout(() => {
    callBack({ id: id, name: "Nausad" });
    // return {id: id,name:'Nausad'}
  }, 5000);
}

function getRepos(name, callBack) {
  setTimeout(() => {
    // return ['p1','p2','p3']

    callBack(["p1", "p2", "p3"]);
  }, 3000);
}

function getCommit(id, callBack) {
  setTimeout(() => {
    callBack(["c1", "c2", "c3"]);
    // return ['c1','c2','c3']
  }, 2000);
}
