let opcao = document.getElementById('selecao')
let teste = opcao.value
function iniciarJogo(){
    if (opcao.value == "-- Selecione o nível --"){
        alert("SELECIONE UMA DAS OPÇÕES!")   
    } else {
        //PROGRAMA INICIA AQUI
        if (opcao.value == "facil"){
            window.location.assign('facil.html')
        } else if (opcao.value == "medio"){
            window.location.assign('medio.html')
        } else {
            window.location.assign('dificil.html')
        }
    }
}