var inc = document.querySelector('.inc')
var dec = document.querySelector('.dec')
var reset = document.querySelector('.reset')
var value = document.querySelector('.value')
inc.addEventListener('click', function () {
    value.innerHTML++
})

dec.addEventListener('click', function () {
    if (value.innerHTML > 0) {
        value.innerHTML--
    }else{
        alert("Value cannot be negative")
    }
})


reset.addEventListener('click', function () {
    value.innerHTML = 0
    alert("Reset the value")
})