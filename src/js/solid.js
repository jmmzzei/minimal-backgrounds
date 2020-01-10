export default class Solid{
    constructor(canvas){
        this.canvas = canvas
    }

    paint(value){
        const ctx = this.canvas.getContext('2d')
        ctx.fillStyle = value
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)        
    }
}