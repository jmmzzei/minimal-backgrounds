export default function Gradient() {


    this.selected = null
    this.ctx = canvas.getContext('2d')
    this.canvas = []

    this.select = (e) => {
        this.selected = e.id
    }

    this.setCanvas = (e) => {
        if (this.canvas.length > 0) {

            //Sort if a number is equal to another 

        } else {
            this.canvas.push(e)
        }

        console.log(this.canvas);

    }

    this.add = (e, color) => {
        console.log(this.canvas);

        arr[e.id] = e.value

        var grd = this.ctx.createLinearGradient(0, 0, 200, 0);

        for (let i = 0; i < arr.length; i++) {
            let output = mapper(arr.length - 1, i)
            if (e.id == i) {
                arr[i] = e.value
                // console.log(arr[i] + ' ' + e.value + ' ' + i );
            }
            grd.addColorStop(output, arr[i]);
        }

        this.ctx.fillStyle = grd;
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }

    this.addInput = () => {

    }

    this.remove = (e) => {
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
