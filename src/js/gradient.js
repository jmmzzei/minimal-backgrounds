import { mapper } from "./helpers";
import { throws } from "assert";

export default class Gradient {
    constructor(canvas, array) {
        this.canvas = canvas
        this.selected = null
        this.ctx = this.canvas.getContext('2d')
        this.lienzos = []
        this.arr = array
    }

    select(e) {
        this.selected = e.id
        console.log('selected: ' + this.selected);
    }

    setCanvas(e) {
        if (this.lienzos.length > 0) {
            //Sort if a number is equal to another 
        } else {
            this.lienzos.push(e)
        }
        console.log(this.lienzos)
    }

    add(e, color) {
        this.arr[e.id] = e.value
        var grd = this.ctx.createLinearGradient(0, 0, 200, 0);
        for (let i = 0; i < this.arr.length; i++) {
            let output = mapper(this.arr.length - 1, i)
            if (e.id == i) {
                this.arr[i] = e.value
                // console.log(arr[i] + ' ' + e.value + ' ' + i );
            }
            grd.addColorStop(output, this.arr[i]);
        }

        this.ctx.fillStyle = grd;
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        console.log(this.arr);
    }

    addInput(color) {
        const input = document.createElement('input');
        input.type = 'color';
        input.id = this.arr.length;
        input.setAttribute('value', color)
        input.addEventListener('input', ()=>{
            gradient.add(input)
        })
        this.arr.push(color);

        let grd = this.ctx.createLinearGradient(0,0,200,0)
        for (let i = 0; i < this.arr.length; i++){
            let output = mapper(this.arr.length -1, i)
            grd.addColorStop(output, this.arr[i])
        }

        this.ctx.fillStyle = grd
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
        return input
    }

    remove(e) {
        console.log('To erase: ' + this.selected);

        if (this.selected != null) {
            document.getElementById('gradients-options').childNodes.forEach(e => {
                e.id == this.selected ? e.remove() : null
            });
        } else {
            console.log('exc');
            let arrayNodes = Array.from(document.getElementById('gradients-options').childNodes)
            arrayNodes.reverse().find(e => e.id).remove()
            this.arr.pop()

            let grd = this.ctx.createLinearGradient(0,0,200,0)
            for (let i = 0; i < this.arr.length; i++){
                let output = mapper(this.arr.length -1, i)
                grd.addColorStop(output, this.arr[i])
            }

            this.ctx.fillStyle = grd
            this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
            
        }
    }
}
