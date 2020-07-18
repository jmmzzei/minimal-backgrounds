export function toggleConfig(e) {
    const configPanelStyle = e.previousSibling.style;
    configPanelStyle.display = configPanelStyle.display == 'none' ? 'block' : 'none'
}

export function mapper(arrlength, input) {
    return 0 + ((1 - 0) / (arrlength - 0)) * (input - 0)
}
