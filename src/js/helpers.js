export function toggleConfig(e) {
    const navStyle = document.getElementsByClassName('nav-bottom').style
    const configPanelStyle = e.previousSibling.previousSibling.style
    configPanelStyle.display = configPanelStyle.display == 'none' ? 'block' : 'none'
    //navStyle.background = navStyle.background == '#000000' ? '#00000000' : "#000000"
}

export function hideAll(e) {
    const h1 = e.parentNode.parentNode.childNodes[1]

    h1.style.fontSize = '18px'
    h1.style.wordSpacing = '2px'
    h1.style.marginTop = '12px'
    h1.style.position = 'fixed'
    h1.style.transition = 'all 1s'

    for (let i = 0; i < e.parentNode.parentNode.childNodes.length; i++) {
        if (e.parentNode.parentNode.childNodes[i].nodeName != '#text') {
            if (e.parentNode.parentNode.childNodes[i].nodeName == 'H1') {
                console.log(e.parentNode.parentNode.childNodes[i].nodeName);
            } else {
                e.parentNode.parentNode.childNodes[i].style.opacity = '0'
                //e.parentNode.parentNode.childNodes[i].style.transition = 'all 1s'  
            }
        }
    }
    const timeout = setTimeout(() => {
        for (let i = 0; i < e.parentNode.parentNode.childNodes.length; i++) {
            if (e.parentNode.parentNode.childNodes[i].nodeName != '#text') {
                if (e.parentNode.parentNode.childNodes[i].nodeName == 'H1') {
                    console.log(e.parentNode.parentNode.childNodes[i].nodeName);
                } else {
                    e.parentNode.parentNode.childNodes[i].style.opacity = '0'
                }
            }
        }

        e.parentNode.parentNode.style.opacity = '0'
        e.parentNode.parentNode.style.transition = 'all 1s'
        setTimeout(() => {
            e.parentNode.parentNode.style.display = 'none'
        }, 500);
    }, 800);
}

export function toggleType(e) {

    e.style.transform = 'translateY(80px)'
    e.style.transition = 'all 1s'
    for (let index = 0; index < 800; index++) {
        console.log(index);
    }
    e.innerHTML = e.innerHTML == 'GRADIENT' ? 'SOLID' : 'GRADIENT'
}

export function mapper(arrlength, input) {
    let output = 0 + ((1 - 0) / (arrlength - 0)) * (input - 0)
    //console.log('Input es: ' + input + ' y el output es: '+ output);
    return output
}

export function animationSetting(e, num) {
    let modificator = ''
    if (e.innerHTML == 'SOLID') {
        modificator = 'nextSibling'
    } else {
        modificator = 'previousSibling'
    }

    if (num == 0) {
        e[modificator][modificator].style.color = '#f1f1f1'
        e[modificator][modificator].style.width = '300px'
        e[modificator][modificator].style.transition = 'all 1s'
    } else {
        if (modificator == 'nextSibling') {
            e[modificator][modificator].innerHTML = 'GRADIENT'
        } else {
            e[modificator][modificator].innerHTML = 'SOLID'
        }
        e[modificator][modificator].style.width = '400px'
    }
}