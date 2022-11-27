// function aumentoFonte() {
//     var el = document.getElementById('fontLabel');
//     var actualFontSize = window.getComputedStyle(el, null).getPropertyValue('font-size');
//     document.getElementById("fontLabel").style.fontSize = `${Number(actualFontSize.replace('px','')) + 1}px`;
// }

// function diminuiFonte() {
//     var el = document.getElementById('fontLabel');
//     var actualFontSize = window.getComputedStyle(el, null).getPropertyValue('font-size');
//     document.getElementById("fontLabel").style.fontSize = `${Number(actualFontSize.replace('px','')) - 1}px`;
// }

// controle do tamanho das fontes

function aumentoFonte() {
    var fSize = document.getElementsByTagName('div');
    var fSize2 = document.getElementsByTagName('a');
    var fSize3 = document.getElementsByTagName('h1');
    var fSize4 = document.getElementsByTagName('p');
    var fSize5 = document.getElementsByTagName('input');
    var fSize6 = document.getElementsByTagName('span');
    for(let i = 0; i < fSize.length; i++) {
        var actualFontSize = window.getComputedStyle(fSize[i], null).getPropertyValue('font-size');
        fSize[i].style.fontSize = `${Number(actualFontSize.replace('px','')) + 1}px`;

    }
    for(let i = 0; i < fSize2.length; i++) {
        var actualFontSize2 = window.getComputedStyle(fSize2[i], null).getPropertyValue('font-size');
        fSize2[i].style.fontSize = `${Number(actualFontSize2.replace('px','')) + 1}px`;

    }
    for(let i = 0; i < fSize3.length; i++) {
        var actualFontSize3 = window.getComputedStyle(fSize3[i], null).getPropertyValue('font-size');
        fSize3[i].style.fontSize = `${Number(actualFontSize3.replace('px','')) + 1}px`;

    }
    for(let i = 0; i < fSize4.length; i++) {
        var actualFontSize4 = window.getComputedStyle(fSize4[i], null).getPropertyValue('font-size');
        fSize4[i].style.fontSize = `${Number(actualFontSize4.replace('px','')) + 1}px`;

    }

    for(let i = 0; i < fSize5.length; i++) {
        var actualFontSize5 = window.getComputedStyle(fSize5[i], null).getPropertyValue('font-size');
        fSize5[i].style.fontSize = `${Number(actualFontSize5.replace('px','')) + 1}px`;

    }
    for(let i = 0; i < fSize6.length; i++) {
        var actualFontSize6 = window.getComputedStyle(fSize6[i], null).getPropertyValue('font-size');
        fSize6[i].style.fontSize = `${Number(actualFontSize6.replace('px','')) + 1}px`;

    }
}


function diminuoFonte() {
    var fSize = document.getElementsByTagName('div');
    var fSize2 = document.getElementsByTagName('a');
    var fSize3 = document.getElementsByTagName('h1');
    var fSize4 = document.getElementsByTagName('p');
    var fSize5 = document.getElementsByTagName('input');
    var fSize6 = document.getElementsByTagName('span');
    for(let i = 0; i < fSize.length; i++) {
        var actualFontSize = window.getComputedStyle(fSize[i], null).getPropertyValue('font-size');
        fSize[i].style.fontSize = `${Number(actualFontSize.replace('px','')) - 1}px`;

    }
    for(let i = 0; i < fSize2.length; i++) {
        var actualFontSize2 = window.getComputedStyle(fSize2[i], null).getPropertyValue('font-size');
        fSize2[i].style.fontSize = `${Number(actualFontSize2.replace('px','')) - 1}px`;

    }
    for(let i = 0; i < fSize3.length; i++) {
        var actualFontSize3 = window.getComputedStyle(fSize3[i], null).getPropertyValue('font-size');
        fSize3[i].style.fontSize = `${Number(actualFontSize3.replace('px','')) - 1}px`;

    }
    for(let i = 0; i < fSize4.length; i++) {
        var actualFontSize4 = window.getComputedStyle(fSize4[i], null).getPropertyValue('font-size');
        fSize4[i].style.fontSize = `${Number(actualFontSize4.replace('px','')) - 1}px`;

    }
    for(let i = 0; i < fSize5.length; i++) {
        var actualFontSize5 = window.getComputedStyle(fSize5[i], null).getPropertyValue('font-size');
        fSize5[i].style.fontSize = `${Number(actualFontSize5.replace('px','')) - 1}px`;

    }
    for(let i = 0; i < fSize6.length; i++) {
        var actualFontSize6 = window.getComputedStyle(fSize6[i], null).getPropertyValue('font-size');
        fSize6[i].style.fontSize = `${Number(actualFontSize6.replace('px','')) - 1}px`;

    }
}


// controle do estilo de cores do site

function ligaContraste() {
document.documentElement.style.setProperty('--mainColorBG', '#242323');
document.documentElement.style.setProperty('--mainColor', '#000');
document.documentElement.style.setProperty('--secundaryColor', '#242323');
document.documentElement.style.setProperty('--tercearyColor', '#000');
document.documentElement.style.setProperty('--mainColorBGContent', '#000');
document.documentElement.style.setProperty('--fontColor', '#fff');
document.documentElement.style.setProperty('--fontColorida', '#fff');
document.documentElement.style.setProperty('--imagemlogo','url(/images/logo_traveller_branco.png)'); 

}


function desligaContraste() {
document.documentElement.style.setProperty('--mainColorBG', '#F0F7FA');
document.documentElement.style.setProperty('--mainColor', '#0D3444');
document.documentElement.style.setProperty('--secundaryColor', '#CCE8F5');
document.documentElement.style.setProperty('--tercearyColor', '#99D2EA');
document.documentElement.style.setProperty('--mainColorBGContent', '#fff');
document.documentElement.style.setProperty('--fontColor', '#000');
document.documentElement.style.setProperty('--fontColorida', '#0D3444');

document.documentElement.style.setProperty('--imagemlogo', 'url(/images/logo_traveller_fundo_transparente.png)');
    }



// Controle de fontes

function fonteAcessivel () {
    document.documentElement.style.setProperty('--fontPadrao', 'Times New Roman');

}

function fontePadrao () {
    document.documentElement.style.setProperty('--fontPadrao', "'Inter', sans-serif");

}