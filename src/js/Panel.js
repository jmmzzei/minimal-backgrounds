const solidOptions = document.getElementById('solid-options')
const addGradient = document.getElementById('add-gradient')
const removeGradient = document.getElementById('remove-gradient')
const gradientOptions = document.getElementById('gradients-options')
const gradientSelector = document.getElementById('gradientSelector')
const solidSelector = document.getElementById('solidSelector')
import {gradient, solid} from './index'

export default class Panel {
  constructor() {
    this.mode = 'GRADIENT'
  }

  showSolidOptions() {
    this.mode = 'SOLID'
    gradientSelector.style.display = 'none'
    solidSelector.style.display = 'block'

    solidOptions.style.display = 'block'
    gradientOptions.style.display = 'none'
    addGradient.style.display = 'none'
    removeGradient.style.display = 'none'

    solid.paint('#f1f1f1')
  }

  showGradientOptions() {
    this.mode = 'GRADIENT'
    gradientSelector.style.display = 'block'
    solidSelector.style.display = 'none'

    gradientOptions.style.display = 'grid'
    solidOptions.style.display = 'none'
    addGradient.style.display = 'block'
    removeGradient.style.display = 'block'

    gradient.rePaint()
  }

  toggleMode() {
    this.mode == 'GRADIENT' ? gradient.rePaint() : solid.paint(cPicker.value)
  }

  isGradientSelected() {
    return gradientSelector.style.display == 'block'
  }
}
