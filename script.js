// =========================
// RELATOS
// =========================

const relatos = [
    "Vi uma pessoa perder oportunidades profissionais após um comentário antigo voltar à tona.",
    "Acredito que algumas atitudes precisam ser responsabilizadas, mas sem perseguição.",
    "As redes sociais ampliam muito o alcance dos julgamentos.",
    "Nem sempre conhecemos toda a história antes de julgar alguém.",
    "Empatia também precisa fazer parte da internet."
];

let indice = 0;

const textoRelato = document.getElementById("textoRelato");

function atualizarRelato() {

    if (!textoRelato) return;

    textoRelato.style.opacity = 0;

    setTimeout(() => {

        textoRelato.innerText = `"${relatos[indice]}"`;

        textoRelato.style.opacity = 1;

    }, 250);

}

function proximo() {

    indice++;

    if (indice >= relatos.length) {

        indice = 0;

    }

    atualizarRelato();

}

function anterior() {

    indice--;

    if (indice < 0) {

        indice = relatos.length - 1;

    }

    atualizarRelato();

}

setInterval(proximo, 7000);

// =========================
// BARRA DE PROGRESSO
// =========================

const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {

    const altura =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scroll = window.scrollY;

    progress.style.width = (scroll / altura) * 100 + "%";

});

// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const elementos = document.querySelectorAll(".fade");

function revelar() {

    elementos.forEach(item => {

        const topo = item.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revelar);

revelar();

// =========================
// MENU ATIVO
// =========================

const secoes = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let atual = "";

    secoes.forEach(secao => {

        const inicio = secao.offsetTop - 120;
        const fim = inicio + secao.offsetHeight;

        if (window.scrollY >= inicio && window.scrollY < fim) {

            atual = secao.id;

        }

    });

    links.forEach(link => {

        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + atual) {

            link.classList.add("ativo");

        }

    });

});

// =========================
// ANIMAÇÃO DOS NÚMEROS
// =========================

const numeros = document.querySelectorAll(".stat h3");

let animou = false;

function contar() {

    if (animou) return;

    const secao = document.getElementById("dados");

    if (!secao) return;

    if (secao.getBoundingClientRect().top < window.innerHeight - 100) {

        numeros.forEach(numero => {

            const alvo = parseInt(numero.innerText);

            let atual = 0;

            const tempo = setInterval(() => {

                atual++;

                numero.innerText = atual + "%";

                if (atual >= alvo) {

                    clearInterval(tempo);

                }

            }, 20);

        });

        animou = true;

    }

}

window.addEventListener("scroll", contar);

contar();