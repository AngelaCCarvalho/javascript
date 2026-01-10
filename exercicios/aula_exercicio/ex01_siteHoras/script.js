


function carregar(){

// Variável da Hora
let dia = new Date();
let horas = dia.getHours();

//VARIÁVEL Minuto
let min = dia.getMinutes();

// Variável div1 
let txt = document.querySelector('.hora')

// VARIÁVEL div2 
let img = document.querySelector('.imagem')

//Variável Body
let body = document.querySelector('#corpo')

    if(horas >= 6 && horas < 12){

        body.style.backgroundColor = '#D3A93A'
        img.src = 'imagem/manha.png';
        txt.innerHTML =` Bom dia, agora são ${horas} horas e ${min} minutos!`

    } else if (horas >= 12 && horas < 19){

        body.style.backgroundColor = '#F8B368'
        txt.innerHTML =` Boa Tarde, agora são ${horas} horas e ${min} minutos!`
        img.src = 'imagem/tarde2.png';

    } else if(horas >= 19 && horas <= 23){

        body.style.backgroundColor = '#014070'  
        img.src = 'imagem/noite.png';
        txt.innerHTML =` Boa Noite, agora são ${horas} horas e ${min} minutos!`

    } else {

        body.style.backgroundColor = '#212A25'
        img.src = 'imagem/madrugada2.png';
        txt.innerHTML =` Boa Madrugada, agora são ${horas} horas e ${min} minutos!`
    }
}

carregar();