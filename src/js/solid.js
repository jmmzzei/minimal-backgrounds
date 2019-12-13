export default class Solid{
    constructor(canvas, value){
        this.canvas = canvas
        this.pickerValue = value
    }

    paint(value){
        const ctx = this.canvas.getContext('2d')
        ctx.fillStyle = value
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)        
    }

}