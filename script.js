let tituloVoto = document.querySelector('.sup-left-1 span');
let cargo = document.querySelector('.sup-left-2 span');
let descricao = document.querySelector('.sup-left-4');
let aviso = document.querySelector('.tela-inferior');
let conteudoLateral = document.querySelector ('.tela-superior-right');
let numero = document.querySelector ('.sup-left-3');

let etapaAtual = 0;
let numeros = '';

function inicio () {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    
    for(let i=0;i<etapa.numero;i++) {
        if(i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    tituloVoto.style.display = 'none';
    cargo.innerHTML = etapa.titulo; 
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    conteudoLateral.innerHTML = '';
    numero.innerHTML = numeroHtml;
} 

function atualiza() {
    let etapa = etapas[etapaAtual];

    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numeros) {
            return true;
        }else{
            return false;
        }
    });

    console.log ("canditado", candidato);
}

function clicou (n) {
    let elNumero = document.querySelector ('.numero.pisca');
    if (elNumero !== null){
        elNumero.innerHTML = n;
        numeros = `${numeros}${n}`;

        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualiza();
            
        }
    }
    
    

}


function branco() {
    alert("Clicou em BRANCO");
}

function corrige() {
    alert("Clicou em CORRIGE");
}

function confirma() {
    alert("Clicou em CONFIRMA");
}

inicio ();