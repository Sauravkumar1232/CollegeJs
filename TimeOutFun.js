console.log("welcome")
function time1() {
    setTimeout(function () {
        console.log("Time out 1")
    }, 3000)
}
function time2() {
    setTimeout(function () {
        console.log("time out 2")
    }, 4000)
}
console.log("End")
time1();
time2();
