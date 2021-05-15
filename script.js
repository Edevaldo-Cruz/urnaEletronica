let tituloVoto = document.querySelector(".sup-left-1 span");
let cargo = document.querySelector(".sup-left-2 span");
let descricao = document.querySelector(".sup-left-4");
let aviso = document.querySelector(".tela-inferior");
let conteudoLateral = document.querySelector(".tela-superior-right");
let numero = document.querySelector(".sup-left-3");

let etapaAtual = 0;
let numeros = "";
let votoBranco = true;
let votos = []

function inicio() {
  let etapa = etapas[etapaAtual];

  numeros = "";
  votoBranco = false;

  let numeroHtml = "";

  for (let i = 0; i < etapa.numero; i++) {
    if (i === 0) {
      numeroHtml += '<div class="numero pisca"></div>';
    } else {
      numeroHtml += '<div class="numero"></div>';
    }
  }

  tituloVoto.style.display = "none";
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = "";
  aviso.style.display = "none";
  conteudoLateral.innerHTML = "";
  numero.innerHTML = numeroHtml;
}

function atualiza() {
  let etapa = etapas[etapaAtual];

  let candidato = etapa.candidatos.filter((item) => {
    if (item.numero === numeros) {
      return true;
    } else {
      return false;
    }
  });

  if (candidato.length > 0) {
    candidato = candidato[0];
    tituloVoto.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = `Nome: ${candidato.nome}<br/> Partido: ${candidato.partido}`;

    let fotoHtml = "";
    for (let i in candidato.foto) {
      fotoHtml += `<div class="img"><img src="img/${candidato.foto[i].url}" alt="Candidato">${candidato.foto[i].legenda}</div>`;
    }

    conteudoLateral.innerHTML = fotoHtml;
  } else {
    tituloVoto.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = '<div class ="voto-nulo ocilando">VOTO NULO</div>';
  }
}

function clicou(n) {
  let elNumero = document.querySelector(".numero.pisca");
  if (elNumero !== null) {
    elNumero.innerHTML = n;
    numeros = `${numeros}${n}`;

    elNumero.classList.remove("pisca");
    if (elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add("pisca");
    } else {
      atualiza();
    }
  }
}

function branco() {
  if (numeros === "") {
    votoBranco = true;
    tituloVoto.style.display = "block";
    aviso.style.display = "block";
    numero.innerHTML = "";
    descricao.innerHTML =
      '<div class ="voto-branco ocilando">VOTO EM BRANCO</div>';
  } else {
      alert ("Para votar em branco, você não pode ter digitado nenhum numero.");
  }
}

function corrige() {
  inicio();
}

function confirma() {
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;

    if(votoBranco === true){
        votoConfirmado = true;
        votos.push ({
            etapa: etapas [etapaAtual].titulo,
            voto: 'branco'
        });
        console.log ("Confirmando como Brnaco");
    }else if(numeros.length === etapa.numero) {
        votoConfirmado = true;
        votos.push ({
            etapa: etapas [etapaAtual].titulo,
            voto: numeros
        });
    }

    if (votoConfirmado) {
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined) {
            inicio();
        } else {
            document.querySelector(".tela").innerHTML = '<div class ="avisoFim ocilando">FIM</div>';
            console.log (votos);
        }
    }
}


inicio();
