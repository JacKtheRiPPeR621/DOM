window.onload  = function() {
    let num = document.getElementById('num')
    let print = document.getElementById('print')
    let list = document.getElementById('list')

    print.onclick = function() {
        list.innerHTML = ''
        let printList = ''
        for(let i=1; i<= parseInt(num.value); i++) {
            if( i % 3 == 0 && i % 5 == 0){
                printList += `<li>`+`fizzbuzz`+`</li>`
            } else if( i % 3 == 0) {
                printList += `<li>` + `fizz` + `</li>`
            } else if( i % 5 == 0) {
                printList += `<li>` + `buzz` + `</li>`
            } else {
                printList += `<li>` + i + `</li>`
            }
        }
        list.innerHTML = printList
    }
}