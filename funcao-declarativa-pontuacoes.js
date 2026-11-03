function calcularPontuacaoTotal(ponutuacoes) {
    let pontuacaoTotal = 0;
    for (let i = 0; i < ponutuacoes.length; i++){
        pontuacaoTotal += ponutuacoes[i] 
    }
    console.log("pontuacao total do jogador:", pontuacaoTotal);
}

const pontuacoesDoJogador = [10, 15, 20, 5, 8]

calcularPontuacaoTotal(pontuacoesDoJogador); 