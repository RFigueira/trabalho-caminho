
const VALE_DIAGNOLA = false;
let flag = false;

    function aStar(posicaoInicial, objetivo, obstaculos) {
    
        let posicaoAtual = posicaoInicial;
        let possiveis = [];
        let caminho = [];
        let naoPermitidas = obstaculos;
        let index;
        
        while(!flag) {
            console.log('--Nao permitidas--');
            console.log(naoPermitidas);
            verificarPosicoesPossiveis(posicaoAtual, possiveis, naoPermitidas);
            console.log('--Possiveis--');
            console.log(possiveis);
            index = melhorIndice(possiveis, objetivo);
            console.log('andou para');
            console.log(possiveis[index]);
            caminho.push(posicaoAtual);
            naoPermitidas.push(posicaoAtual);
            posicaoAtual = possiveis[index];

           if(possiveis.length == 0) {
               console.log('Deu xoxoh, nao existem possicoes possiveis');
               flag = true;
               break;
           }
            if(posicaoAtual[0] == objetivo[0] && posicaoAtual[1] == objetivo[1]) {
                flag = true;
            }
        }
        console.log('-----Caminho utilizado-----');
        caminho.push(objetivo);
        console.log(caminho);
    }


    function melhorIndice(posicoes, objetivo) {
        let melhorIndice = null;
        let melhorCusto = null;
        for (let i = 0; i < posicoes.length; i++) {
            if (melhorIndice == null || (custo(posicoes[i], objetivo) < melhorCusto)) {
                melhorIndice = i;
                melhorCusto = custo(posicoes[i], objetivo)
            }
        }
        return melhorIndice;
    }

    function custo(posicao, final) {
        let dh = Math.abs(posicao[0] - final[0]);
        let dv = Math.abs(posicao[1] - final[1]);
        return dh + dv;
    }


function verificarPosicoesPossiveis(posicaoAtual, possiveis, naoPermitidas) {
    for (x = -1; x <= 1; x++) {
      for (y = -1; y <= 1; y++) {
        if (!VALE_DIAGNOLA) {
          if (Math.abs(x + y) == 1) {
            let pH = posicaoAtual[0] + x; // posicao horisontal
            let pV = posicaoAtual[1] + y; // posicao vertical   
           let isValido = naoPermitidas.filter((item)=>
                 item[0] == pH && item[1] == pV 
           )
           if(isValido.length == 0) {
                possiveis.push([pH, pV]);
           }
          }
        }
      }
    }
  }
    
aStar([2,3], [5,5], [[1,3], [3,3], [2,4]]);


