const changeText = () => {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = 'Quero ter minha própria residência e trabalhar numa empresa que me pague bem!'
}
changeText()

const changeToGreenSquare = () => {
    let color = document.getElementsByClassName('main-content')[0];
    color.style.background = 'rgb(76,164,109)';
}
changeToGreenSquare()