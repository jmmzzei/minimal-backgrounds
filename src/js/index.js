const cPicker = document.getElementById('colorPicker')
const canvas = document.getElementById('myCanvas')
const bg = document.getElementsByClassName('bg')[0]
const g1Picker = document.getElementById('g1Picker')
const g2Picker = document.getElementById('g2Picker');

const button = document.getElementById('btn-download');
const gradientOptions = document.getElementById('gradients-options')
console.log('adsa')



function hidePrimary(e) {
    animationSetting(e, e.innerHTML, 0)
}
function showPrimary(e) {
    animationSetting(e, e.innerHTML, 1)
}

function animationSetting(e, str, num) {
    let modificator = ''
    if (str == 'SOLID') {
        modificator = 'nextSibling'
    } else {
        modificator = 'previousSibling'
    }

    if (num == 0) {
        e[modificator][modificator].style.color = '#f1f1f1'
        e[modificator][modificator].style.width = '300px'
        e[modificator][modificator].style.transition = 'all 1s'
    } else {
        if (modificator == 'nextSibling') {
            e[modificator][modificator].innerHTML = 'GRADIENT'
        } else {
            e[modificator][modificator].innerHTML = 'SOLID'
        }
        e[modificator][modificator].style.width = '400px'
    }
}
function hideAll(e) {
    const h1 = e.parentNode.parentNode.childNodes[1]

    h1.style.fontSize = '18px'
    h1.style.wordSpacing = '2px'
    h1.style.marginTop = '12px'
    h1.style.position = 'fixed'
    h1.style.transition = 'all 1s'

    for (let i = 0; i < e.parentNode.parentNode.childNodes.length; i++) {
        if (e.parentNode.parentNode.childNodes[i].nodeName != '#text') {
            if (e.parentNode.parentNode.childNodes[i].nodeName == 'H1') {
                console.log(e.parentNode.parentNode.childNodes[i].nodeName);
            }else {
                e.parentNode.parentNode.childNodes[i].style.opacity = '0'  
                //e.parentNode.parentNode.childNodes[i].style.transition = 'all 1s'  
            }
        }                       
    }


    const timeout = setTimeout(() => {


            for (let i = 0; i < e.parentNode.parentNode.childNodes.length; i++) {
                if (e.parentNode.parentNode.childNodes[i].nodeName != '#text') {
            if (e.parentNode.parentNode.childNodes[i].nodeName == 'H1') {
                console.log(e.parentNode.parentNode.childNodes[i].nodeName);
            }else {
                e.parentNode.parentNode.childNodes[i].style.opacity = '0'

            }
        }  
            }

            e.parentNode.parentNode.style.opacity = '0'  
            e.parentNode.parentNode.style.transition = 'all 1s' 
            setTimeout(() => {
              e.parentNode.parentNode.style.display = 'none'  
            }, 500);
    }, 800);
}




import Gradient from "./gradient";


const gradient = new Gradient()

import "./helpers"
import "./listeners";
import '../css/style.scss'

let width = 1920,
    height = 1080,
    quality = 0.92;

let extension = 'png'

let arr = ['#fff', '#000']


function AddGradient(e){
    arr[e.id] = e.value
    const ctx = canvas.getContext('2d')

    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    
    for (let i = 0; i < arr.length; i++) {
        let output = mapper(arr.length - 1, i)   
        if (e.id == i) {
            arr[i] = e.value
            // console.log(arr[i] + ' ' + e.value + ' ' + i );
        }
        grd.addColorStop(output, arr[i]);
    }

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function AddGradientSelector(e, color){
    const input = document.createElement('input');
    input.type = 'color';
    input.id = arr.length;
    input.setAttribute('value', color)
    input.setAttribute('oninput',  `AddGradient(this)`)
    gradientOptions.append(input);
    arr.push(color);
    console.log(arr[0] + arr[1] + arr[2]);
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


