window.onload = function() {
    let num = document.getElementById('num')
    let list = document.getElementById('list')
    let print = document.getElementById('print')

    print.onclick = function () {
        let N = parseInt(num.value)
        let start = new Date().getTime()
        for (let i = 1; i <= N; i++) {
            let item = document.createElement('li')
            item.innerText = i
            list.appendChild(item)
        }
        console.log(new Date().getTime() - start)
    }
}