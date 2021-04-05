window.onload = function () {
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')

    addtask.onclick = function() {
        let li = document.createElement('li')
        //Add the text
        let taskspan = document.createElement('span')
        taskspan.innerText = newtask.value

        //Add the delete button
        let xbtn = document.createElement('button')
        xbtn.innerText = 'X'
        xbtn.onclick = function(event) {
            event.target.parentElement.remove()
        }

        //Add the Up button 
        let upbtn = document.createElement('button')
        upbtn.innerText = 'Up'
        upbtn.onclick = function(event) {
            //event.target : button
            //event.target.parentElement: Current Element
            //event.target.parentElement.parentElement: TodoList

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, //Current Element
                event.target.parentElement.previousElementSibling
            )
        }

        //Add the Down button 
        let dbtn = document.createElement('button')
        dbtn.innerText = 'Down'
        dbtn.onclick = function(event) {
            //event.target : button
            //event.target.parentElement: Current Element
            //event.target.parentElement.parentElement: TodoList

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling, 
                event.target.parentElement
            )
        }

        li.appendChild(taskspan)
        li.appendChild(xbtn)
        li.appendChild(upbtn)
        li.appendChild(dbtn)
        todolist.appendChild(li)
    }

}

