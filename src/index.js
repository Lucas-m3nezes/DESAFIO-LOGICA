//Minhas variáveis
let nomeHeroi = "Insannity"
let xpHeroi = 9050

// Estrutura de decisão
let nivelDoHeroi;

if (xpHeroi < 1000){
    nivelDoHeroi = "Ferro"
}else if (xpHeroi >= 1001 && xpHeroi <= 2000){
    nivelDoHeroi = "Bronze"
}else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    nivelDoHeroi = "Prata"
}else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    nivelDoHeroi = "Ouro"
}else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivelDoHeroi = "Platina"
}else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivelDoHeroi = "Ascendente"
}else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivelDoHeroi = "Imortal"
}else {(xpHeroi >= 10001)
    nivelDoHeroi = "Radiante"
}

//Saída
console.log("O heroi " + nomeHeroi + " está no nível: " + nivelDoHeroi)
