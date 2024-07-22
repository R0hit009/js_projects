console.log("Rohit")
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach(function (button) {
    button.addEventListener("click" , function(e){
        console.log(e)
        console.log(e.target)
        if(e.isTrusted ){
            body.style.backgroundColor = e.target.id
        }
    })
    console.log(button)
})
