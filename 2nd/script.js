function addResult(mes){
    const div = document.createElement('div')
    const result = document.createElement('p')
    div.style = "color: white; font-weight: bold;"
    result.style = "font-size: large; background-color: grey; text-align: center;"
    result.innerHTML = `${mes}`
    div.appendChild(result)
    document.querySelector("form").appendChild(div)
}

const form = document.querySelector("form")
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector('#result')
    if(height < 0 || height === '' || isNaN(height)){
        addResult('give a valide hight')
    }
    if(weight < 0 || weight === '' || isNaN(weight)){
        addResult('give a valide weight')
    }
    {
        addResult((weight/((height*height)/10000)).toFixed(2))
    }
    
    console.log(height)
})