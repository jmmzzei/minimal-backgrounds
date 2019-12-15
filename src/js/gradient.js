import { mapper } from "./helpers";
import { userInfo } from "os";

export default class Gradient {
    constructor(canvas) {
        this.canvas = canvas
        this.selected = null
        this.ctx = this.canvas.getContext('2d')
        this.arr = ['#ffffff', '#ffffff']
    }

    paint(){
        let grd = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0)
        for (let i = 0; i < this.arr.length; i++) {
            let output = mapper(this.arr.length - 1, i)
            grd.addColorStop(output, this.arr[i])
        }
        this.ctx.fillStyle = grd
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    select(e) {
        this.selected = e.id
    }

    add(e) {
        this.arr[e.id] = e.value

        var grd = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);

        for (let i = 0; i < this.arr.length; i++) {
            let output = mapper(this.arr.length - 1, i)
            if (e.id == i) {
                this.arr[i] = e.value
            }
            grd.addColorStop(output, this.arr[i]);
        }

        this.ctx.fillStyle = grd;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    addInput(color) {

        const input = document.createElement('input');
        input.type = 'color';
        input.id = this.arr.length;
        input.setAttribute('value', color)
        this.arr.push(color);
        this.paint()
        return input
    }

    remove(e) {
        if (this.arr.length > 2) {
            let arrayNodes = Array.from(document.getElementById('gradients-options').childNodes)
            arrayNodes.reverse().find(e => e.id).remove()
            this.arr.pop()
            this.paint()
        } 
    }

}
