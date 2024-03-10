'use strict'

const btn_start = document.querySelector('.btn-start')

const text = document.querySelectorAll('.text-show')[1]
const h2_text = document.querySelector('.h2-show-text')

btn_start.addEventListener('click', () => {
    h2_text.innerHTML = text.value

    let num = innerWidth
    
    const start_show = setInterval( () => {
        h2_text.style.left = `${num}px`
        num -= 1
    
        let info = h2_text.getBoundingClientRect()
    
        let num__ = info.x + info.width
        console.log(num__)

        if (num__ <= 0) {
            clearInterval(start_show)
        }
    }, 5)
})

//* Author: FraVelz
