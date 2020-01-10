import { toggleConfig } from "./helpers";
import Gradient from "./gradient";
import Solid from './solid'
import { width, height, quality } from './listeners'
import '../css/style.scss'

const canvas = document.getElementById('myCanvas')
const gradientOptions = document.getElementById('gradients-options')
const configToggle = document.getElementById('config-toggle')
const colorToggle = document.getElementById('color-toggle')
const inputOne = document.getElementById('0')
const inputTwo = document.getElementById('1')
const addGradient = document.getElementById('add-gradient')
const removeGradient = document.getElementById('remove-gradient')
const downloadBtn = document.getElementById('btn-download')
const cPicker = document.getElementById('colorPicker')
const solidOptions = document.getElementById('solid-options')
const selectMode = document.getElementById('select-mode')
const menu = document.getElementsByClassName('menu')[0]
const flex = document.getElementsByClassName('flex')

const gradient = new Gradient(canvas)
const solid = new Solid(canvas)

let extension = 'png',
    mode = 'GRADIENT';

document.addEventListener('DOMContentLoaded', () => {

    selectMode.addEventListener('click', () => {
        if (document.getElementById('gradientSelector').style.display == 'block') {
            document.getElementById('gradientSelector').style.display = 'none'
            document.getElementById('solidSelector').style.display = 'block'
            mode = 'SOLID'

            solidOptions.style.display = 'block'
            gradientOptions.style.display = 'none'
            addGradient.style.display = 'none'
            removeGradient.style.display = 'none'

            solid.paint('#f1f1f1')
        } else {
            document.getElementById('gradientSelector').style.display = 'block'
            document.getElementById('solidSelector').style.display = 'none'
            mode = 'GRADIENT'

            gradientOptions.style.display = 'grid'
            solidOptions.style.display = 'none'
            addGradient.style.display = 'block'
            removeGradient.style.display = 'block'

            gradient.rePaint()
        }
    })

    addGradient.addEventListener('click', () => {
        let input = gradient.addInput('#ffffff')
        input.addEventListener('input', () => {
            gradient.paint(input)
        })
        gradientOptions.append(input)
    })

    removeGradient.addEventListener('click', () => {
        gradient.remove(removeGradient)
    })

    colorToggle.addEventListener('click', () => {
        toggleConfig(colorToggle)
    })

    configToggle.addEventListener('click', () => {
        toggleConfig(configToggle)
    })

    inputOne.addEventListener('click', () => {
        gradient.select(inputOne)
    })

    inputOne.addEventListener('input', () => {
        gradient.paint(inputOne)
    })

    inputOne.addEventListener('focus', () => {
        gradient.rePaint()
    })

    inputTwo.addEventListener('click', () => {
        gradient.select(inputTwo)
    })

    inputTwo.addEventListener('input', () => {
        gradient.paint(inputTwo)
    })

    inputTwo.addEventListener('focus', () => {
        gradient.rePaint()
    })

    cPicker.addEventListener('input', () => {
        solid.paint(cPicker.value)
    })

    downloadBtn.addEventListener('click', () => {

        canvas.setAttribute('width', width)
        canvas.setAttribute('height', height)

        if (mode == 'GRADIENT') {
            gradient.rePaint()
        } else if (mode == 'SOLID') {
            solid.paint(cPicker.value)
        }

        for (let i = 0; i < document.getElementsByClassName('extension').length; i++) {
            if (document.getElementsByClassName('extension')[i].checked == true) {
                extension = document.getElementsByClassName('extension')[i].value
            }
        }

        downloadBtn.setAttribute('download', document.getElementById('img-name').value)
        downloadBtn.setAttribute('href', canvas.toDataURL(`image/${extension}`, quality))

    })

    menu.addEventListener('click', ()=>{
        for (let i = 0; i < flex.length; i++) {    
            if (flex[i].style.display == 'block') {
                flex[i].style.display = 'none'
            } else {
                flex[i].style.display = 'block'
            }
        }
    })
})

