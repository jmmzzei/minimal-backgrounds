const imgWidth = document.getElementById('img-width')
const imgHeight = document.getElementById('img-height')
const imgQuality = document.getElementById('img-quality')
const imgName = document.getElementById('img-name')
const cPicker = document.getElementById('colorPicker')
const canvas = document.getElementById('myCanvas')
const bg = document.getElementsByClassName('bg')[0]
const g1Picker = document.getElementById('g1Picker')
const g2Picker = document.getElementById('g2Picker');

const button = document.getElementById('btn-download');

export default function listeners() {

    imgHeight.addEventListener('change', (e) => {
        height = imgHeight.value
        console.log(height);
    })
    imgWidth.addEventListener('change', (e) => {
        width = imgWidth.value
        console.log(width);
    })
    imgQuality.addEventListener('change', () => {
        quality = imgQuality.value
    })




}