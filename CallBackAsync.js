console.log('welcome')
let user=getUser(1)
console.log(user,'user')

let repos=getRepos(user.name)
console.log(repos)

let commits=getCommit(repos[0])
console.log(commits ,'commit')

console.log('end..')

function getUser(id){
setTimeout(() => {
    return {id: id,name:'Nausad'}
    
}, 5000);

}

function getRepos(name){
    setTimeout(() => {
        return ['p1','p2','p3']
        
    }, 3000);

}

function getCommit(repo){
    setTimeout(() => {
        
        return ['c1','c2','c3']
    }, 2000);

}