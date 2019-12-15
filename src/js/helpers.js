export function toggleConfig(e) {
    const navStyle = document.getElementsByClassName('nav-bottom').style
    const configPanelStyle = e.previousSibling.previousSibling.style
    configPanelStyle.display = configPanelStyle.display == 'none' ? 'block' : 'none'
}

export function mapper(arrlength, input) {
    let output = 0 + ((1 - 0) / (arrlength - 0)) * (input - 0)
    return output
}
