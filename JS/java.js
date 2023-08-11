var lista = [1, 2];
var valorAleatorio = teste();
console.log(valorAleatorio);

let escolhaDoJogador;
let moedaCC;

function jogar(){
    escolhaDoJogador= document.getElementById("escolha").value;

    escolhaDoJogador= escolhaDoJogador.toUpperCase();

    moedaCC= calculoDaMoeda();
    document.getElementById("moeda").innerHTML= moedaCC ;

    resultado= comp();
    document.getElementById("voceResposta").innerHTML= resultado ;

    console.log(valorAleatorio)
}

function calculoDaMoeda(){
    if( valorAleatorio === 1){
        return "COROA" ;
    }
    else{
        return "CARA";
    }
}

function comp(){
    if(escolhaDoJogador === calculoDaMoeda()){
        return " VENCEU "
    } else {
        return " PERDEU "
    }
}

function teste(){
    valorAleatorio = lista[Math.floor(Math.random() * lista.length)];
}