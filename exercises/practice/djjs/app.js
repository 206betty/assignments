var myMain = document.getElementById("bigB");

myMain.addEventListener("mouseover", function () {
 myMain.style.backgroundColor = "blue"
})

myMain.addEventListener("mousedown", function () {
    myMain.style.backgroundColor = "red"
})

myMain.addEventListener("mouseup", function () {
    myMain.style.backgroundColor = "yellow"
})

myMain.addEventListener("dblclick", function () {
    myMain.style.backgroundColor = "green"
})

document.addEventListener("scroll", function () {
    myMain.style.backgroundColor = "orange"
})

