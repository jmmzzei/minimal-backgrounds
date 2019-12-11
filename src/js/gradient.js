import {mapper} from "./helpers";

export default class Gradient{
    constructor(canvas, array){
        this.canvas = canvas
        this.selected = null
        this.ctx = this.canvas.getContext('2d')
        this.lienzos = []
        this.arr = array
    }

    select(e){
        this.selected = e.id
        console.log('selected: '+this.selected);
    }

    setCanvas(e){
        if (this.lienzos.length > 0) {
            //Sort if a number is equal to another 
        } else {
            this.lienzos.push(e)
        }
        console.log(this.lienzos)
    }

    add(e, color){
        // console.log(this.lienzos);
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

    addInput(){

    }

    remove(e){
        console.log('To erase: '+this.selected);
            //    console.log(e);

        if (this.selected != null) {
            document.getElementById('gradients-options').childNodes.forEach(e => {
                e.id == this.selected ? e.remove() : null
            });
        } else {
            console.log('exc');
            let arrayNodes = Array.from(document.getElementById('gradients-options').childNodes)
            arrayNodes.reverse().find(e => e.id).remove()
        }
    }
}
