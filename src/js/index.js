import { animationButtons, hideAll, toggleConfig, mapper } from "./helpers";
import Gradient from "./gradient";

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
const imgName = document.getElementById('img-name')
const cPicker = document.getElementById('colorPicker')

const x0 = document.getElementById('x0')
const x1 = document.getElementById('x1')
const y0 = document.getElementById('y0')
const y1 = document.getElementById('y1')
const g1Picker = document.getElementById('g1Picker')
const g2Picker = document.getElementById('g2Picker');

const selector = document.getElementById('type-select')
const solidOptions = document.getElementById('solid-options')

const gradient = new Gradient(canvas)


let width = 1920,
    height = 1080,
    quality = 0.92;

let extension = 'png'

let mode = 'GRADIENT'

import Listeners from "./listeners";


import '../css/style.scss'
document.addEventListener('DOMContentLoaded', () => {

    selector.addEventListener('change', () => {
        mode = selector.value

        if (mode == 'SOLID') {
            solidOptions.style.display = 'block'
            gradientOptions.style.display = 'none'
            addGradient.style.display = 'none'
            removeGradient.style.display = 'none'
            x0.style.display = 'none'
            y0.style.display = 'none'
            x1.style.display = 'none'
            y1.style.display = 'none'

            console.log(cPicker);
            
            const ctx = canvas.getContext('2d')
            ctx.fillStyle = cPicker.value;
            ctx.fillRect(0, 0, x1.value, y1.value);

        } else if (mode == 'GRADIENT') {
            gradientOptions.style.display = 'block'
            solidOptions.style.display = 'none'
            addGradient.style.display = 'block'
            removeGradient.style.display = 'block'
            x0.style.display = 'block'
            x1.style.display = 'block'
            y0.style.display = 'block'
            y1.style.display = 'block'

            console.log(gradient.arr);
            
            const ctx = canvas.getContext('2d')
            
            let grd = ctx.createLinearGradient(0, 0, gradient.canvas.width, 0);
            for (let i = 0; i < gradient.arr.length; i++) {
                let output = mapper(gradient.arr.length - 1, i)
                grd.addColorStop(output, gradient.arr[i]);
            }

            ctx.fillStyle = grd
            ctx.fillRect(x0.value == undefined ? 0 : x0.value, y0.value == undefined ? 0 : y0.value, x1.value, y1.value);

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
        console.log(err);
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

    x0.addEventListener('input', (x0) => {
        console.log(x0.target.value);
    })

    y0.addEventListener('input', (y0) => {
        console.log(y0.data);
    })

    x1.addEventListener('input', (x1) => {
        console.log(x1.target.value);
        width = x1.target.value 
    })

    y1.addEventListener('input', (y1) => {
        console.log(y1.data);
        height = y1.target.value
    })

    canvas.addEventListener('click', () => {
        console.log(canvas.width);
    })

    imgHeight.addEventListener('change', () => {
        height = imgHeight.value
        // y1.value = height
        console.log(height);
    })

    imgWidth.addEventListener('change', () => {
        width = imgWidth.value
        // x1.value = width
        console.log(width);
    })
    
    imgQuality.addEventListener('change', () => {
        quality = imgQuality.value
    })

    cPicker.addEventListener('input', (e) => {
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = e.target.value;
        ctx.fillRect(0, 0, width, height);
    })

    // need to pass all this logic code to the Gradient class
    // to some method called getGradientToDownload or something like that

    downloadBtn.addEventListener('click', () => {

        canvas.setAttribute('width', width)
        canvas.setAttribute('height', height)
        let ctx = canvas.getContext('2d')

        if (mode == 'GRADIENT') {
            let grd = ctx.createLinearGradient(0, 0, width, 0);
            for (let i = 0; i < gradient.arr.length; i++) {
                let output = mapper(gradient.arr.length - 1, i)
                grd.addColorStop(output, gradient.arr[i]);
            }

            ctx.fillStyle = grd
            ctx.fillRect(x0.value == undefined ? 0 : x0.value, y0.value == undefined ? 0 : y0.value,gradient.canvas.width, gradient.canvas.height);

            console.log(gradient.arr);
        } else if(mode == 'SOLID'){
            ctx.fillStyle = cPicker.value
            ctx.fillRect(x0.value == undefined ? 0 : x0.value, y0.value == undefined ? 0 : y0.value,gradient.canvas.width, gradient.canvas.height);
        }

        for (let i = 0; i < document.getElementsByClassName('extension').length; i++) {
            if (document.getElementsByClassName('extension')[i].checked == true) {
                extension = document.getElementsByClassName('extension')[i].value
            }
        }

        downloadBtn.setAttribute('download', imgName.value)
        downloadBtn.setAttribute('href', canvas.toDataURL(`image/${extension}`, quality))

    })

})
