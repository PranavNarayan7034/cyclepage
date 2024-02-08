let menu=document.getElementById('menu')
let respnav=document.getElementById('respnav')
let mynav=document.getElementById('mynav')
let close=document.getElementById('close')

menu.addEventListener('click',()=>{
    respnav.classList.add('toggle')
    mynav.classList.add('toggle')
})

close.addEventListener('click',()=>{
    respnav.classList.remove('toggle')
    mynav.classList.remove('toggle')
})