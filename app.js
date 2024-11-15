

 


function sortear() {
    let quantidade = parseInt (document.getElementById ("quantidade").value); // atribuí que a variável -let quantidade - vai resgatar o que estiver no html com a ID "quantidade" usando o document.getElementById; 
    //Quando coloquei .value, informei que eu quero APENAS o VALOR que for digitado;
    //O parseInt () faz com que eu declare que na caixa do Input só possa me retornar NÚMEROS INTEIROS;
    let de = parseInt(document.getElementById ("de").value);
    let ate = parseInt(document.getElementById ("ate").value);
    let intervalo = ate - de;

    //if (quantidade > intervalo) {
       // alert ("A quantidade de números pedida é menor que o intervalo colocado");
       // return;
   // }
   
   if (de >= ate) {
    // Em seguida, exiba a mensagem de alerta
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    }
    
    if (quantidade > (ate -de +1) ) {
        alert ('Campo "quantidade" deve ser menor ou igual ao intervalo informado');
        document.getElementById("quantidade").value = "";
        document.getElementById("de").value = "";
        document.getElementById("ate").value = "";               
    }
    
    let sorteados = []; //let sorteados = []; //Aqui criei um array vazio e apenas isso até agora.
    let numero; //let numero; //criei esta variável para poder usá-la depois
    for (let i =0; i < quantidade; i++) {
        
        numero = obterNumeroAleatorio (de,ate); //A variável número chama a função obterNumeroAleatorio // Essa variável tem como objetivo resgatar o/os número/s gerado/s pela função obterNumeroAleatorio que coloquei mais abaixo. //Como os parâmetros para a função chamada foram definidos como max (máximo) e min (mínimo), estou dizendo que o mínimo é o valor resgatadoo em "de", através da let de, e o máximo é o valor resgatado na let ate.
        while (sorteados.includes(numero)) {//Aqui eu apenas pedi para que se verificasse se o número obtido na função acima já consta na array sorteados. Se a condição for verdadeira, então... 
            numero = obterNumeroAleatorio (de,ate); //A variável número sorteará outro número aleatório
           
        }
        sorteados.push(numero);//Aqui temos o array vazio chamado sorteados, e com esse .push estou dizendo que se deve "empurrar" todos os valores que a variável número apresentar.
    }
    let resultado = document.getElementById ("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo" id="label">Números sorteados:  ${sorteados}</label>` //innerHTML altera TUDO o que estiver dentro da id, por isso , para esse caso foi necessário copiar TODA a <label>.
    
    // CÓDIGO QUE DEU CERTO PARA A MUDANÇA DE TEXTO ATRAVÉS DE UM CAMINHO DIFERENTE DO QUE FOI DADO NO VÍDEO DA ALURA:
    //document.getElementById('label').innerHTML = `Números sorteados: ${sorteados}`;// Eu disse: "procure no documento", usando "document", ou seja, o "onde procurar", em seguida eu disse o que procurar " um elemento cuja id é label". Usando o innerHTML eu manei que algo fosse alterado, no caso o texto e o mudei de maneira que aparecesse o texto e a função que eu queria.
        
    alterarStatusBotao();
    
   
}


//A função abaixo tem o objetivo de criar números aleatórios. Nos parâmetros da função eu defini que ele terá um mínimo e um máximo.
function obterNumeroAleatorio (min, max) {
    return Math.floor (Math.random() * (max - min + 1)) + min;
    //Math.random(): Gera um número decimal entre 0 e 1.
    //(max - min + 1): Ajusta o intervalo para que o valor final inclua tanto o min quanto o max.
    //Math.floor(...) + min: Arredonda o número para baixo, garantindo que ele esteja no intervalo inteiro entre min e max.
}
function alterarStatusBotao () {
    let botao = document.getElementById ("btn-reiniciar");
    if (botao.classList.contains ("container__botao-desabilitado")) //dentro da minha let botao, verifique (classList - lista todas as classes que aquele elemento tem, pois ele pode ter mais de uma classe) se contém a classe x (o .contains verifica se a classe contém o que está dentro do parentesis.)
    {
        botao.classList.remove ("container__botao-desabilitado"); //na minha let botao, verifique o que há (.classList), em seguida remova (.remove) a classe que eu colar entre parentesis;
        botao.classList.add ("container__botao"); //na minha let botao, verifique o que há (.classList), em seguida adicione (.add) a classe que eu colar entre parentesis;     
        } else {
            botao.classList.remove ("container__botao");
            botao.classList.add("container__botao-desabilitado");
            
    }
}
function reiniciar() {
    document.getElementById ("quantidade").value = ""; //para esses elementos em que tenho que digitar algum valor, atribuí uma string vazia.
    document.getElementById ("de").value = "";
    document.getElementById ("ate").value = "";
    document.getElementById ("resultado").innerHTML = `<label class="texto__paragrafo" id="label">Números sorteados:  Nenhum número sorteado até agora </label>`; //Nesse caso, eu refiz o que havia feito lá em cima e alterei o label inteiro, incluindo sua classe, para mudar o texto.
    alterarStatusBotao (); //aqui apenas invoquei novamente a função alterar status do botão, agora faz sentido haver uma função para desabilitar esse botão logo após seu uso.
}