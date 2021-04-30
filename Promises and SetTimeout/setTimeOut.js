let inpNum = document.getElementById('inpNum')
let btnWait = document.getElementById('btnWait')
let stop = document.getElementById('stop')



let wait = function(timeout , done) {
    if(isNaN(parseInt(timeout))) {
      return done(new Error("This is not a number"))
    }
    
    waitingTime = setTimeout(() => {
        done(null)
    } , timeout)
}

btnWait.onclick = function () {
    wait(inpNum.value , (err) =>{
        if(err) console.log(err)
        else console.log('wait over')
    } )
}

stop.onclick = function() {
    clearInterval(waitingTime)
    console.log('Waiting Cancelled')
}