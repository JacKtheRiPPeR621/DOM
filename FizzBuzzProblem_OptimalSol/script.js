window.onload  = function() {
    let num = document.getElementById('num')
    let print = document.getElementById('print')
    let list = document.getElementById('list')

    print.onclick = function() {
        list.innerHTML = ''
        let c3 = 0;
        let c5 = 0;
        for(let i = 1; i<= parseInt(num.value)  ; i++) {
            let li = document.createElement('li')
            let printlist = ``
            c3++;
            c5++;

            if(c3 == 3) {c3=0 ; printlist += `fizz`}
            if(c5 == 5) {c5=0 ; printlist += `buzz`}
            if(printlist == ``) {printlist = i}

            li.textContent = printlist
            list.appendChild(li)
        }
    }
}