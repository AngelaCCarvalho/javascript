
let botao = document.querySelector('#botao')
botao.addEventListener('click', clicar)

function clicar() {

    let inputData = document.querySelector('#data') // Variável que coleta o dado do usuário
    let dataNasc = new Date(inputData.value); // variável de data com atribuição de valor no dado coletado do usuário.


    // Coleta de dados dos Dia, Mês e Ano.
    let anoNasc = dataNasc.getUTCFullYear();
    let mesNasc = dataNasc.getUTCMonth() + 1; 
    let diaNasc = dataNasc.getUTCDay();

    //Dados atuais do sistema, Dia, Mês, Ano.
    let ano = new Date();
    let anoAtual = ano.getFullYear();
    let mesAtual = ano.getMonth() + 1;
    let diaAtual = ano.getDay();

    // Cálculo Inicial
    let idade = anoAtual - anoNasc;

    // Captura do sexo
    let sexo = document.getElementsByTagName('radsex');

    //Captura do texto
    let txt = document.querySelector('.teste')
    
    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc) ){
       idade--;
    }      
    
    txt.innerHTML = `Sua idade é ${idade}`

    if(){
        
    }

    


}