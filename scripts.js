//Função -> é um trecho de código que só é executado quando for chamado.



//BRUNO FREITAS -> PROJETO CLIMA / WEATHER PROJECT 

let chave = "645752a4b50468f25e62aa71935c3d0d"

function colocarNaTela(dados){

    console.log(dados)
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric"
        ).then(resposta => resposta.json()) 
    
    colocarNaTela(dados)
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
