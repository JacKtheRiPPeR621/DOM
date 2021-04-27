let inpNum = document.getElementById('inpNum')
let btnWait = document.getElementById('btnWait')

let wait = function(timeout) {
    return new Promise((resolve , reject) => {
    if(isNaN(parseInt(timeout))){
        reject(new Error("The Number should be an integer"))
    }
    setTimeout(resolve , timeout)
    })
}

btnWait.onclick = function () {
    wait(inpNum.value)
    .then(() => {
        console.log('waited over')
    })
    .catch((err) => {
        console.log(err)
    })
}