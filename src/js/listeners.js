const imgWidth = document.getElementById('img-width')
const imgHeight = document.getElementById('img-height')
const imgQuality = document.getElementById('img-quality')

export let width = 1920,
    height = 1080,
    quality = 0.92;

imgHeight.addEventListener('change', () => {
    height = imgHeight.value
})
imgWidth.addEventListener('change', () => {
    width = imgWidth.value
})
imgQuality.addEventListener('change', () => {
    quality = imgQuality.value
})
