import { toggleConfig } from "./helpers";
import Gradient from "./gradient";
import Panel from './Panel'
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
const selectMode = document.getElementById('select-mode')
const menu = document.getElementsByClassName('menu')[0]
const flex = document.getElementsByClassName('flex')
const extensionOptions = document.getElementsByClassName('extension')

export const gradient = new Gradient(canvas)
export const solid = new Solid(canvas)
let panel = new Panel()
let extension = 'png'

document.addEventListener('DOMContentLoaded', () => {

    selectMode.addEventListener('click', () => {
        if (panel.isGradientSelected()) {
            panel.showSolidOptions()
        } else {
            panel.showGradientOptions()
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
       
        panel.toggleMode()
        
        Array.from(extensionOptions).forEach(el => {
            el.checked ? extension = el.value : null
        })

        downloadBtn.setAttribute('download', document.getElementById('img-name').value)
        downloadBtn.setAttribute('href', canvas.toDataURL(`image/${extension}`, quality))

    })

    menu.addEventListener('click', () => {
        Array.from(flex).forEach(el => {
           el.style.display = el.style.display == 'block' 
                ? 'none' : 'block'
        })
    })
})

