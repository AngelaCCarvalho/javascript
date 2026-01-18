
let botao = document.querySelector('#botao')
botao.addEventListener('click', clicar)

function clicar() {

    let inputData = document.querySelector('#data') // Variável que coleta o dado do usuário

    // Se o campo estiver vazio, avise o usuário e pare a execução
    if (inputData.value.length == 0) {
        window.alert('[ERRO] Verifique os dados!')
       return 
    }

    let dataNasc = new Date(inputData.value); // variável de data com atribuição de valor no dado coletado do usuário.


    // Coleta de dados dos Dia, Mês e Ano.
    let anoNasc = dataNasc.getUTCFullYear(); //uso do UTC é importante por conta de fuso horário.
    let mesNasc = dataNasc.getUTCMonth() + 1; 
    let diaNasc = dataNasc.getUTCDate(); 
    
    //Dados atuais do sistema, Dia, Mês, Ano.
    let ano = new Date();
    let anoAtual = ano.getFullYear();
    let mesAtual = ano.getMonth() + 1;
    let diaAtual = ano.getDate(); // Uso do Date() é para acessar dias 1-31, já o Day() acessa os dias da semana.

    // Cálculo Inicial
    let idade = anoAtual - anoNasc;

    // Captura do sexo
    let sexo = document.getElementsByName('radsex');

    //Captura do texto
    let txt = document.querySelector('.teste')

    //Declaração da variável img
    let img = document.querySelector('#img')
    
    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc) ){
       idade--;
    }  
    
    let genero = ''

    if(sexo[0].checked){

        genero = 'Homem'

    }else if (sexo[1].checked){

        genero = 'Mulher'
    }

    if( idade >= 1 && idade <= 14 && genero == 'Homem'){

         txt.innerHTML = `Você é Menino de ${idade} anos.`
         img.src = 'imagem/menino.png'
         
    }else if (idade >= 1 && idade <= 14 && genero == 'Mulher'){

        txt.innerHTML = `Você é um Menina de ${idade} anos.`
        img.src = 'imagem/menina.png'

    }else if(idade >= 18 && idade <= 59 && genero == 'Mulher'){
         
        txt.innerHTML = `Você é uma Mulher de ${idade} anos.`
        img.src = 'imagem/mulher.png'

    }else if(idade >= 18 && idade <= 59 && genero == 'Homem'){
         
        txt.innerHTML = `Você é um Homem de ${idade} anos.`
        img.src = 'imagem/homem.png'

    }else if(idade >= 60 && genero == 'Homem'){
         
        txt.innerHTML = `Você é um Homem de ${idade} anos.`
        img.src = 'imagem/idoso.png' 

    }else {         
        txt.innerHTML = `Você é uma Mulher de ${idade} anos.`
        img.src = 'imagem/idosa.png'   
    }

}