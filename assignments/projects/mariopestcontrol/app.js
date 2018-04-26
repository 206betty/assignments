document.baddies.addEventListener("submit", function(e){
    e.preventDefault();
var ghowmany = document.baddies.g1.value
var bhowmany = document.baddies.b1.value
var chowmany = document.baddies.c1.value

document.getElementById("biguns").innerHTML = `${(ghowmany * 5) + (bhowmany * 7) + (chowmany * 11)}` 
})
