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
const gradientOptions = document.getElementById('gradients-options')

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

    cPicker.addEventListener('input', (e) => {
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = e.target.value;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    })

    button.addEventListener('click', () => {
        canvas.setAttribute('width', width + 'px')
        canvas.setAttribute('height', height + 'px')
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = cPicker.value
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        for (let i = 0; i < document.getElementsByClassName('ext').length; i++) {
            if (document.getElementsByClassName('ext')[i].checked == true) {
                extension = document.getElementsByClassName('ext')[i].value
            }
        }

        button.setAttribute('download', imgName.value)
        button.setAttribute('href', canvas.toDataURL(`image/${extension}`, quality))
    })
}