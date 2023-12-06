const inputColor = document.getElementById('pegaCor')
inputColor.addEventListener('input', ()=> {
    const color = inputColor.value
    document.getElementById('corAtual').innerText = color
    document.getElementById('boxColor').style.backgroundColor = color
})