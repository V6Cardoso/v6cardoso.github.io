const textoBase = '\n';
const texto = ['Você chegou aqui muito cedo', 'Página em construção...'];
let textoFinal = "";

const typingvel = 100;
const erasingvel = 30;
let textoIndex = 0;
let charTextoIndex = 0;
let charTextoBaseIndex = 0;



function digitar() {
    if(charTextoBaseIndex < textoBase.length) {
        textoFinal += textoBase.charAt(charTextoBaseIndex)
        document.getElementById("titulo").innerHTML = textoFinal;
        charTextoBaseIndex++;
        setTimeout(digitar, typingvel + (Math.random() * 100));
    }
    else if(textoIndex < texto.length) {
        if(charTextoIndex < texto[textoIndex].length) {
            textoFinal += texto[textoIndex].charAt(charTextoIndex)
            document.getElementById("titulo").innerHTML = textoFinal;
            charTextoIndex++;
            setTimeout(digitar, typingvel + (Math.random() * 40));
        }
        else if(textoIndex == 0) {
            textoIndex++;
            charTextoIndex = 0;
            setTimeout(apagar, 2000);
        }
    }
    
}

function apagar() {
    if(textoFinal > textoBase) {
        textoFinal = textoFinal.substring(0, textoFinal.length - 1)
        document.getElementById("titulo").innerHTML = textoFinal;
        setTimeout(apagar, erasingvel);
    }
    else {
        setTimeout(digitar, 500);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(digitar, 500);
})