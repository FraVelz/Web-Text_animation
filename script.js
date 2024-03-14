'use strict'

/* ******************** Variables ******************** */

const circle = document.querySelectorAll('.circle')

const btn_transparent = document.querySelector('.transparent')
const btn_mode = document.querySelector('.mode')

const btn_bg = document.querySelector('.btn-bg')
const btn_fg = document.querySelector('.btn-fg')

const btn_update = document.querySelector('.btn-update')
const btn_start = document.querySelector('.btn-start')

const info_colors = document.querySelectorAll('.__color')

const text = document.querySelector('.it-text')
const h2_text = document.querySelector('.h2-show-text')

const rootStyle = document.documentElement.style;
let speed_num = 5

/* ******************** Eventos ******************** */

btn_transparent.addEventListener('click', () => {
    if (circle[0].style.background == 'transparent') {
        circle[0].style.background = rootStyle.getPropertyValue('--clr-text')
        rootStyle.setProperty('--clr-fondo', 'rgb(80, 170, 136)')
        rootStyle.setProperty('--clr-input-text', 'rgb(80, 170, 136)')
        // text: rgb(50, 50, 50)

    } else {
        circle[0].style.background = 'transparent'
        rootStyle.setProperty('--clr-fondo', 'transparent')
        // rootStyle.setProperty('--clr-input-text', 'rgb(50, 50, 50)')
        rootStyle.setProperty('--clr-input-text', 'rgb(200, 200, 200)')

        // if (circle[1].style.background == 'transparent') {
        //     rootStyle.setProperty('--clr-text', 'rgba(200, 200, 200)')
        // }
    }
})

btn_mode.addEventListener('click', () => {
    if (circle[1].style.background == 'transparent') {
        circle[1].style.background = rootStyle.getPropertyValue('--clr-text')
        rootStyle.setProperty('--clr-f-body', 'rgba(50, 50, 50)')

    } else {
        circle[1].style.background = 'transparent'
        rootStyle.setProperty('--clr-f-body', 'rgb(200, 200, 200)')
    }
})

btn_bg.addEventListener('click', () => {
    let color = document.querySelector('.it-bg').value

    if (color == '') { color = info_colors[0].value }
    
    rootStyle.setProperty('--clr-fondo', color)
    document.querySelector('.info-it-bg').innerHTML = color
})

btn_fg.addEventListener('click', () => {
    let color = document.querySelector('.it-fg').value
    
    if (color == '') { color = info_colors[1].value }

    rootStyle.setProperty('--clr-text', color)
    document.querySelector('.info-it-fg').innerHTML = color
})

btn_update.addEventListener('click', () => {
    speed_num = document.querySelector('.it-speed').value
    document.querySelector('.info-it-speed').innerHTML = speed_num/1000 + 's'
})

btn_start.addEventListener('click', () => {
    h2_text.innerHTML = text.value

    let num = innerWidth
    
    const start_show = setInterval( () => {
        h2_text.style.left = `${num}px`
        num -= 1
    
        let info = h2_text.getBoundingClientRect()
    
        if (info.x + info.width <= 0) {
            clearInterval(start_show)
        }
    }, speed_num)
})

//* Author: FraVelz
