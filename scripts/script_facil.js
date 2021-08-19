//variavel nova VIDA
let contador_de_vida = 0
let mosquito_mortos = 0
let mosquito_vivo = 0
let coracoes = 3 //coração perdidos...2, 1, 0... gameover
//--------------------------------
let horizontal;
let vertical;
horizontal = Math.ceil(Math.random() * 1000)
vertical = Math.ceil(Math.random() * 700)        
let mosquito = window.document.getElementById("mosquito")
mosquito.style.position = "absolute"
mosquito.style.left = horizontal + 'px'
mosquito.style.top = vertical + 'px'

function mataMosquito(){
    mosquito.style.display = 'none' //aqui eu mato o mosquito(ele ganha display none)
    mosquito_mortos += 1
}

window.setInterval(mudaDeLugar, 3000)        
function mudaDeLugar(){  
    if (coracoes > 0 && contador_de_vida <= 3){
        horizontal = Math.ceil(Math.random() * 1000)
        vertical = Math.ceil(Math.random() * 700)
        mosquito.style.display = 'initial'//retorno do mosquito depois de morto
        mosquito.style.left = horizontal + 'px'
        mosquito.style.top = vertical + 'px'
        mosquito_vivo += 1

        if (mosquito_vivo > mosquito_mortos & contador_de_vida < 3){
                //"perde coração"0 v                        
                coracoes -= 1
                document.getElementsByClassName('coracao')[contador_de_vida].src = "imgs/coracao_vazio.svg"
                contador_de_vida += 1
            } 
        //-------CORAÇÃO---------------------------
    } else {
        window.location.href = "gameover.html"
    }
}

//tempo
var contador = 99

let set_Tempo = window.setInterval(contaTempo, 1000)

function contaTempo(){
    window.document.getElementById("p-fdp").innerText = `Tempo restante: ${contador}`
    contador -= 1
}