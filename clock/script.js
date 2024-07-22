const clock = document.querySelector("#clock")
setInterval(function(){
    const time = new Date()
    console.log(time)
    clock.innerHTML = time.toLocaleTimeString()
},1000)