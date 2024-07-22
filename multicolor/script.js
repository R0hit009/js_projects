const randcolor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

console.log(randcolor());
const body = document.querySelector('body')
let varcolor
const change = function(){
    varcolor = setInterval(function(){
        body.style.backgroundColor = randcolor()
    },1000)
}

const notchange = function(){
    clearInterval(varcolor)
}
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
start.addEventListener('click',change)
stop.addEventListener('click', notchange)
