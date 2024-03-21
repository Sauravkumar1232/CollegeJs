console.log('welcome')
let user=getUser(1)
console.log(user,'user')
let repos=getRepos(user.name)
console.log(repos)
let commits=getCommit(repos[0])
console.log(commits ,'commit')
console.log('end..')
function getUser(id){
    return {id: id,name:'Nausad'}

}
function getRepos(name){
    return ['p1','p2','p3']

}
function getCommit(repo){
    return ['c1','c2','c3']

}