// document.getElementById("count").innerText ='12'

// let count = 5

// console.log(count)


let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")


function increment() {
    count +=1
    countEl.innerText = count
}

function save() {
    let countStr = count+"- "
    saveEl.innerText += countStr
    console.log(count)
    count = 0
    countEl.innerText = count
   
}


