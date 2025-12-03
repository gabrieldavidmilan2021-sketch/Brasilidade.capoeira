// Futuro JavaScript caso queira animar a navbar ou adicionar efeitos
console.log("Site carregado com sucesso!");
// Lista de imagens da intro
const imagensIntro = [
    "/IMG/gilson.jpg",
    "/IMG/gilson2.jpg",
    "/IMG/gilson3.jpg",
    "/IMG/gilson4.jpg",
    "/IMG/gilson5.jpg",
    "/IMG/gilson1.jpg"
];

// Controle do índice
let indexIntro = 0;

// Elemento da imagem
const introImg = document.getElementById("introFoto");

// Função para trocar manualmente
function trocarIntro(direcao) {
    indexIntro = (indexIntro + direcao + imagensIntro.length) % imagensIntro.length;
    introImg.src = imagensIntro[indexIntro];
}

// Troca automática após a animação inicial
function iniciarTrocaAutomatica() {
    setInterval(() => {
        indexIntro = (indexIntro + 1) % imagensIntro.length;
        introImg.src = imagensIntro[indexIntro];
    }, 10000); // 4 segundos
}

// Espera o fade-in inicial (2.5 segundos)
setTimeout(iniciarTrocaAutomatica, 2500);
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("open");
}
