const cPicker = document.getElementById('colorPicker')
const canvas = document.getElementById('myCanvas')
const bg = document.getElementsByClassName('bg')[0]
const g1Picker = document.getElementById('g1Picker')
const g2Picker = document.getElementById('g2Picker');

const button = document.getElementById('btn-download');
const gradientOptions = document.getElementById('gradients-options')

const solidBtn = document.getElementById('solid')
const gradientBtn = document.getElementById('gradient')
const configToggle = document.getElementById('config-toggle')
const colorToggle = document.getElementById('color-toggle')

const inputOne = document.getElementById('0')
const inputTwo = document.getElementById('1')

const addGradient = document.getElementById('add-gradient')
const removeGradient = document.getElementById('remove-gradient')

import Gradient from "./gradient";

let arr = ['#fff', '#000']

const gradient = new Gradient(canvas, arr)

let width = 1920,
    height = 1080,
    quality = 0.92;

let extension = 'png'

import Listeners from "./listeners";

import { animationSetting, hideAll, toggleConfig } from "./helpers";


import '../css/style.scss'
document.addEventListener('DOMContentLoaded', () => {
    solidBtn.addEventListener('mouseover', ()=>{animationSetting(solidBtn, 0) }, false)
    solidBtn.addEventListener('mouseout', ()=>{ animationSetting(solidBtn, 1)}, false)
    gradientBtn.addEventListener('mouseover',()=>{ animationSetting(gradientBtn, 0)}, false)
    gradientBtn.addEventListener('mouseout',()=>{ animationSetting(gradientBtn, 1)}, false)
    gradientBtn.addEventListener('click',() =>{ hideAll(gradientBtn)}, false)

    addGradient.addEventListener('click', ()=> {
        AddGradientInput(addGradient, '#8924a4')
    })

    removeGradient.addEventListener('click', ()=>{
        gradient.remove(removeGradient)
    })

    colorToggle.addEventListener('click', () => {
        toggleConfig(colorToggle)
    })

    configToggle.addEventListener('click', ()=>{
        toggleConfig(configToggle)
    })

    inputOne.addEventListener('click', () => {
        gradient.select(inputOne)
    })

    inputOne.addEventListener('input', ()=>{
        gradient.add(inputOne)
    })
    
    inputOne.addEventListener('focus', ()=>{
        gradient.setCanvas(inputOne)
    })

    inputTwo.addEventListener('click', () => {
        gradient.select(inputTwo)
    })

    inputTwo.addEventListener('input', ()=> {
        gradient.add(inputTwo)
    })

    inputTwo.addEventListener('focus', ()=>{
        gradient.setCanvas(inputTwo)
    })
})

function AddGradientInput(e, color) {
    const input = document.createElement('input');
    input.type = 'color';
    input.id = arr.length;
    input.setAttribute('value', color)
    // input.setAttribute('oninput', `AddGradient(this)`)
    input.addEventListener('input', ()=>{
        gradient.add(input)
    })
    gradientOptions.append(input);
    arr.push(color);
    console.log(arr);
}

function select(e) {
    //e.parentNode.className == 'gradient' ? bg.style.background = `linear-gradient(${g1Picker.value}, ${g2Picker.value})` : bg.style.background = cPicker.value
    if (e.parentNode.className == 'gradient') {
        const ctx = canvas.getContext('2d')

        // Create gradient
        var grd = ctx.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, g1Picker.value);
        grd.addColorStop(1, g2Picker.value);

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    } else {
        console.log(e);

        const ctx = canvas.getContext('2d')

        ctx.fillStyle = cPicker.value;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
    console.log(e);
}

var percent = ''
/*
const s = e => {
    percent = e.innerHTML / 100
    const ctx = canvas.getContext('2d')
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, g1Picker.value);
    grd.addColorStop(percent, 'cyan');
    grd.addColorStop(1, g2Picker.value);

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}
*/


