let boxes = document.querySelector(".box")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")

let box = 0

function Incerase(){
    box++
    boxes.innerText = box
}
function Decerase(){
    if(box == 0){
        return
    }    
    box--
    boxes.innerText = box
}
function Reset(){
    box = 0
    boxes.innerText = box
}