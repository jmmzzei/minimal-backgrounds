import { animationButtons, hideAll, toggleConfig, mapper } from "./helpers";
import Gradient from "./gradient";
import Solid from './solid'

import '../css/style.scss'

const canvas = document.getElementById('myCanvas')

const gradientOptions = document.getElementById('gradients-options')

const solidBtn = document.getElementById('solid')
const gradientBtn = document.getElementById('gradient')
const configToggle = document.getElementById('config-toggle')
const colorToggle = document.getElementById('color-toggle')

const inputOne = document.getElementById('0')
const inputTwo = document.getElementById('1')

const addGradient = document.getElementById('add-gradient')
const removeGradient = document.getElementById('remove-gradient')

const downloadBtn = document.getElementById('btn-download')

const imgWidth = document.getElementById('img-width')
const imgHeight = document.getElementById('img-height')
const imgQuality = document.getElementById('img-quality')
const cPicker = document.getElementById('colorPicker')

const selector = document.getElementById('type-select')
const solidOptions = document.getElementById('solid-options')

const gradient = new Gradient(canvas)
const solid = new Solid(canvas, cPicker.value)


// Just to test if the listeners imported works even though I don't link the specific js to the html
// apparently the listener is called when the width/height/quality is required
import { width, height, quality } from './listeners'

// let width = 1920,
//     height = 1080,
//     quality = 0.92;

let extension = 'png'

let mode = 'GRADIENT'

document.addEventListener('DOMContentLoaded', () => {

    selector.addEventListener('change', () => {
        mode = selector.value

        if (mode == 'SOLID') {
            solidOptions.style.display = 'block'
            gradientOptions.style.display = 'none'
            addGradient.style.display = 'none'
            removeGradient.style.display = 'none'

            solid.paint('#f1f1f1')

        } else if (mode == 'GRADIENT') {
            gradientOptions.style.display = 'block'
            solidOptions.style.display = 'none'
            addGradient.style.display = 'block'
            removeGradient.style.display = 'block'

            gradient.paint()
        }
    })

    solidBtn.addEventListener('mouseover', () => { animationButtons(solidBtn, 0) }, false)
    solidBtn.addEventListener('mouseout', () => { animationButtons(solidBtn, 1) }, false)
    gradientBtn.addEventListener('mouseover', () => { animationButtons(gradientBtn, 0) }, false)
    gradientBtn.addEventListener('mouseout', () => { animationButtons(gradientBtn, 1) }, false)
    gradientBtn.addEventListener('click', () => {
        hideAll(gradientBtn)
        mode = 'GRADIENT'
    }, false)

    addGradient.addEventListener('click', () => {
        let input = gradient.addInput('#000000')
        input.addEventListener('input', () => {
            gradient.add(input)
        })
        gradientOptions.append(input)
    })

    removeGradient.addEventListener('click', () => {
        let err = gradient.remove(removeGradient)
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
        gradient.add(inputOne)
    })

    inputOne.addEventListener('focus', () => {
        gradient.setCanvas(inputOne)
    })

    inputTwo.addEventListener('click', () => {
        gradient.select(inputTwo)
    })

    inputTwo.addEventListener('input', () => {
        gradient.add(inputTwo)
    })

    inputTwo.addEventListener('focus', () => {
        gradient.setCanvas(inputTwo)
    })

    cPicker.addEventListener('input', () => {
        solid.paint(cPicker.value)
    })

    downloadBtn.addEventListener('click', () => {

        canvas.setAttribute('width', width)
        canvas.setAttribute('height', height)

        if (mode == 'GRADIENT') {
            gradient.paint()
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

})
